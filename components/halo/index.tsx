import Head from 'next/head'

export default function Halo() {
  return (
    <>
      <Head>
        {/*
        // @ts-ignore */}
        <meta charset="utf-8" />
        <title>DJ | Cuber Club</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style global jsx>{`
        html {
          height: 100%;
        }

        body {
          height: inherit;
          margin: 0;
          font: 1rem/1.5 system-ui, sans-serif;
        }

        #__next {
          height: inherit;
          display: flex;
          flex-direction: column;
        }

        header {
          box-sizing: border-box;
          width: 100vw;
          padding: 1rem calc(50vw - 200px);
          background-color: tomato;
        }

        a {
          color: inherit;
        }

        main {
          box-sizing: border-box;
          width: 100vw;
          padding: 1rem calc(50vw - 200px);
          flex: 1;
        }

        .sequence {
          font-size: 1.5rem;
        }

        .highlight {
          background: gold;
        }

        ul {
          padding-left: 0;
          list-style: none;
          column-count: 3;
        }

        li {
          transition: background-color 200ms;
        }

        footer {
          box-sizing: border-box;
          width: 100vw;
          padding: 1rem calc(50vw - 200px);
          background-color: tomato;
        }
      `}</style>
    </>
  )
}
