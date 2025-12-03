"use client";

import { Pagination } from "@geckoui/geckoui";
import { useState } from "react";

export function BasicPaginationExample() {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-4">
      <Pagination currentPage={page} totalPages={10} onChange={setPage} />
      <p className="text-sm text-gray-600">Current page: {page}</p>
    </div>
  );
}

export function LargePaginationExample() {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-4">
      <Pagination currentPage={page} totalPages={100} onChange={setPage} />
      <p className="text-sm text-gray-600">Page {page} of 100</p>
    </div>
  );
}

export function CenteredPaginationExample() {
  const [page, setPage] = useState(5);

  return (
    <Pagination currentPage={page} totalPages={20} onChange={setPage} className="justify-center" />
  );
}

export function RightAlignedPaginationExample() {
  const [page, setPage] = useState(1);

  return (
    <Pagination currentPage={page} totalPages={15} onChange={setPage} className="justify-end" />
  );
}

export function WithDataFetchingExample() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10"
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setLoading(true);
    setPage(newPage);
    // Simulate API call
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-md p-4 min-h-[120px]">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <ul className="space-y-2">
            {currentItems.map((item, index) => (
              <li key={index} className="p-2 bg-gray-50 dark:bg-neutral-800 rounded">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onChange={handlePageChange} />
    </div>
  );
}

export function APIIntegrationExample() {
  const [page, setPage] = useState(1);

  // Simulated API response
  const totalItems = 250;
  const itemsPerPage = 25;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // In real app: fetchData(`/api/items?page=${newPage}&limit=${itemsPerPage}`)
    console.log(`Fetching page ${newPage}`);
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-md p-4">
        <p className="text-sm text-gray-600">
          Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, totalItems)} of{" "}
          {totalItems} items
        </p>
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onChange={handlePageChange} />
    </div>
  );
}
