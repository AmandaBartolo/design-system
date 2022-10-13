import "./styles/global.css";
import { Box } from "./components/Box";
import { Header } from "./components/Login/Header";
import { Form } from "./components/Login/Form";
import { Footer } from "./components/Login/Footer";

export function App() {
  return (
    <div className="w-screen h-screen bg-blue-900 flex items-center justify-center text-gray-700 flex-col">
      <Box>
        <Header />
        <Form />
        <Footer />
      </Box>
    </div>
  );
}
