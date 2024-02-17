/**
 * # Home Page
 */
// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

/**
 * 🚨 Create 404 page. Or check the already existing one from next.js.
 */

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div> */}
            <Link href="/search">
                Magic the Gathering Card Search 🌳💀💧🔥🌞
            </Link>
        </main>
    );
}
