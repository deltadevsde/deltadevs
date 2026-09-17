import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>delta devs — privacy &amp; protocol engineering</title>
        <meta
          name="description"
          content="delta devs is a research and engineering consultancy based out of rural Germany, focusing on crypto protocol engineering and privacy-preserving technologies."
        />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#f7f7f8" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Image src="/brandmark.svg" alt="delta devs logo" width={44} height={36} priority />
          <div>
            <h1>delta devs de GmbH <span className={styles.cursor} aria-hidden="true">█</span></h1>
            <p>Hessen, Germany</p>
          </div>
        </header>

        <section className={styles.about} aria-labelledby="about-heading">
          <h2 id="about-heading"><span aria-hidden="true"># </span>About delta devs</h2>
          <p>
            delta devs is a research and engineering consultancy based out of rural Germany,
            focusing on crypto protocol engineering and privacy-preserving technologies.
          </p>
          <p>
            We have contributed to <a href="https://github.com/celestiaorg/celestia-node">Celestia&apos;s DAS nodes</a>,{" "}
            <a href="https://github.com/a16z/jolt">a16z&apos;s JOLT zkVM</a>,{" "}
            <a href="https://noble.xyz">Noble&apos;s flagship commonware chain</a>,{" "}
            Ethereum contract suites, and{" "}
            <a href="https://github.com/distractedm1nd/ztreamer">Zcash tooling</a>.
          </p>
          <p>
            We are researching a novel timing side-channel attack on a variety of
            zk backends in collaboration with the Max-Planck Institute for Security
            and Privacy and Georgia Tech.
          </p>
          <p>
            We also created <a href="https://github.com/deltadevsde/prism">PRISM</a>, a zero-knowledge key-transparency protocol to
            protect against MITM attacks when using E2EE services.
          </p>
        </section>

        <nav className={styles.links} aria-label="Connect with delta devs">
          <a href="https://x.com/deltadevs_">follow-us</a>
          <a href="https://github.com/deltadevsde">join-us</a>
          <a href="mailto:ryan@deltadevs.xyz">hire-us</a>
        </nav>

        <footer className={styles.footer}>
          <span className={styles.divider} aria-hidden="true">___</span>
          <p>
            CEOs: <a href="https://x.com/distractedm1nd">Ryan Ford</a>
            {" | "}
            <a href="https://x.com/spusch810">Sebastian Pusch</a>
          </p>
        </footer>
      </main>
    </>
  );
}
