import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe('Table', () => {
    test('component is rendered', async () => {
        render(<Table />);
        const tableElement = await screen.findByTestId("movie");
        expect(tableElement.textContent).toBe('Movie');
    });

    test('list items are rendered', async () => {
        render(<Table />)
        const tableRows = await screen.findAllByTestId('rows');
        expect(tableRows).toHaveLength(5);
    });

    test('pagination is rendered', async () => {
        render(<Table />)
        const pagesList = await screen.findAllByRole('listitem');
        expect(pagesList).toHaveLength(3);
    });
});