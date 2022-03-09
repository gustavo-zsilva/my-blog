import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />

                <meta
                    name="description"
                    content="Bem-vindos ao meu blog de programação!
                        Aqui eu compartilho alguns posts comentando sobre
                        tecnologias do ecossistema React que estão no hype."
                />
                <meta name="author" content="Gustavo Zonta da Silva" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}