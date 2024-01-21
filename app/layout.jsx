
import Nav from '../components/Nav'
import './globals.css'
// import Footer from '../components/Footer'
import { StateProvider } from '../context/StateContext'; 
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Gadget Galaxy',
  description: 'Online Electronics Store',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang='en'>
       
        {/* Other head elements */}
        <link rel="icon" href="/Screenshot 2024-01-20 221617.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Screenshot 2024-01-20 221617.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Screenshot 2024-01-20 221617.png" />
        {/* Add additional sizes if needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     
      <body>


        
        <StateProvider>

          <Nav />
          <Toaster/> 
          {children}
          {/* <Footer/> */}

        </StateProvider>


      </body>
    </html>
  )
}
