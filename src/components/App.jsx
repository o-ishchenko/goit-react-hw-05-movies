import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />}>
          <Route path=":authorId" element={<AuthorSubView />} />
        </Route>
        <Route path="books" element={<BooksView />} />
        <Route path="books/:bookId" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} /> */}
      </Route>
    </Routes>
  );
};
