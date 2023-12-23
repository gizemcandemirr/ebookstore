import React from 'react';
import { render, screen } from '@testing-library/react';
import BookInfoComponent from '../BookInfo';

const mockBook = {
  volumeInfo: {
    title: "Test Book",
    authors: ["Author 1", "Author 2"],
    pageCount: 123,
    description: "Test Description",
  },
  saleInfo: {
    saleability: "NOT_FOR_SALE",
    listPrice: {
      amount: 10,
      currencyCode: "USD",
    },
  },
  searchInfo:{
    textSnippet:"Description"
  }
};

const SALE_STATUS = {
  NOT_FOR_SALE: "NOT_FOR_SALE",
  ON_SALE: "ON_SALE",
};

describe('BookInfoComponent', () => {
  test('renders book information', () => {
    render(<BookInfoComponent book={mockBook} SALE_STATUS={SALE_STATUS} />);
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText(/Author 1, Author 2/)).toBeInTheDocument();
    expect(screen.getByText("Page Count: 123")).toBeInTheDocument();
    expect(screen.getByText("NOT FOR SALE 10 USD")).toBeInTheDocument();
  });

});
