import './App.css';
import { Route, Routes } from 'react-router-dom';
import DrinkDetails from './components/DrinkDetails.';
import HomePage from './components/HomePage';
import { QueryClient, QueryClientProvider } from 'react-query';
import DrinkListByIngredient from './components/DrinkListByIngredient';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="md:container md:mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DrinkDetails />} />
          <Route path="/drinks" element={<DrinkListByIngredient />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
