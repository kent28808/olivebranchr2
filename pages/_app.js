import "../styles/globals.scss";
import MessageProvider from "../context/MessageContext"; // Import w/o wrapping in {} or will show error b/c exporting w/ word "default"

export default function MyApp({ Component, pageProps }) {
  return (
    <MessageProvider>
      <Component {...pageProps} />
    </MessageProvider>
  );
}
