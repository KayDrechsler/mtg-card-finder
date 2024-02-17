/**
 * # Search - the actual card search
 */
/**
 * ## Imports
 */
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Scry from "scryfall-sdk";
import { Card } from "scryfall-sdk";

/**
 * ## Component
 */
function Search(): JSX.Element {
    /**
     * ### State
     */
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Card[]>([]);

    /**
     * ### Handlers
     */
    const handleSearch = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
        /* - Prevent default behaviour of refreshing the page: */
        e.preventDefault();

        try {
            const card: Card = await Scry.Cards.byName(searchTerm);
            setSearchResults([card]);
            console.log('Search Results: ', searchResults);
        } catch (error) {
            console.error('Error: ', error);
            setSearchResults([]);
        }
    };

    /**
     * ### Effects
     */
    useEffect(() => {
        console.log('searchResults', searchResults);
    }, [searchResults]);

    /**
     * ### JSX Output
     */
    return (
        <div>
            <h1>Magic the Gathering Card Search</h1>
            <h2>🌳💀💧🔥🌞</h2>

            <form>
                <fieldset>
                    <legend>Search for Magic Cards</legend>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter Magic Card Name"
                    />
                    <button type="submit" onClick={handleSearch}>Search</button>
                </fieldset>
            </form>
            {searchResults.length > 0 && (
                <>
                    <h3>Search Results</h3>
                    <ul>
                        {searchResults.map((card: Card, index: number) => {
                            return (
                                <li key={index}>
                                    <h3>{card.name}</h3>
                                    {card.image_uris && (
                                        <Image
                                            src={card.image_uris.large}
                                            alt={card.name}
                                            width={200}
                                            height={300}
                                        />
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
            <Link href="/">Back to Home</Link>
        </div>
    );
}

/**
 * ## Exports
 */
export default Search;