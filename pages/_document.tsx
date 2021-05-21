import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        console.log('document')
        return (
            <Html lang='en'>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                    <meta
                        name="description"
                        content="Software Developer, Freelancer ,MERN developer"
                    />
                    <meta
                        name="keywords"
                        content="Software Developer, Freelancer ,MERN developer"
                    />
                </Head>
                <body className='h-screen bg-fixed bg-gradient-to-r from-gray to-blue-500 dark:from-dark-500 dark:to-dark-700'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument