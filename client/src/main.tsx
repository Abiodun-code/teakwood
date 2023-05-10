import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider  from './Contexts/AuthContext'
import ProductProvider from './Contexts/ProductContext'
import BlogProvider from './Contexts/BlogContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BlogProvider>
    <ProductProvider>
      <AuthProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </AuthProvider>
    </ProductProvider>
  </BlogProvider>,
)
