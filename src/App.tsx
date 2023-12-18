import './App.css';
import { Route, Routes } from 'react-router-dom';
import DrinkDetails from './components/DrinkDetails.';
import HomePage from './components/HomePage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DrinkDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
