import '@/styles/globals.css'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head';

const rootElement = () => document.getElementById("__next");

const theme = createTheme({
  typography: {
    fontFamily: " 'Noto Sans Thai', 'Noto Sans JP', sans-serif"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
  },
  components:{
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiMenu: {
      defaultProps: {
        container : rootElement
      }
    },
    MuiDrawer: {
      defaultProps: {
        container : rootElement
      }
    }
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Head>
          <title>BAKU's Birthday | 9 August</title>
          <meta name="title" content="BAKU's Birthday | 9 August" />
          <meta name="description" content={`${process.env.NEXT_PUBLIC_DESCRIPTION}`} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_PATH}`} />
          <meta property="og:title" content="BAKU's Birthday | 9 August" />
          <meta property="og:description" content={`เว็บไซด์สำหรับข่าวสารคาเฟ่วันเกิด และ การอวยพรพรวันเกิดคุณบากุ Vtuber แห่งบ้าน ARP โดยเหล่า "ผู้ฝันใฝ่แปลว่าอิสระ"`} />
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/baku-og.png`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_BASE_PATH}`} />
          <meta property="twitter:title" content="BAKU's Birthday | 9 August" />
          <meta property="twitter:description" content={`เว็บไซด์สำหรับข่าวสารคาเฟ่วันเกิด และ การอวยพรพรวันเกิดคุณบากุ Vtuber แห่งบ้าน ARP โดยเหล่า "ผู้ฝันใฝ่แปลว่าอิสระ"`} />
          <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/baku-og.png`} />

          <meta name="robots" content="all" />
        </Head>
        <main className='w-full h-full flex flex-col items-center'>
          <div className='-z-[1] fixed top-0 left-0 w-full h-screen bg-[#EFEFEF]'/>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </StyledEngineProvider> 
  )
}
