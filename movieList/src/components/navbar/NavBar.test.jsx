import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe('NavBar', () => {
    test('when in navbar input is typed it shows suggestion list', async () => {
        render(<NavBar />)
        const user = userEvent.setup();
        const navbarInput = screen.getByPlaceholderText('Search movie...');
        expect(navbarInput.value).toBe('');
        await user.click(navbarInput)
        await user.type(navbarInput, 'o');
        const suggestionsList = await screen.findAllByRole('listitem');
        expect(suggestionsList).toHaveLength(8);
    });

    test('when you click on a suggestion it opens a movie modal', async () => {
        render(<NavBar />)
        const user = userEvent.setup();
        const navbarInput = screen.getByPlaceholderText('Search movie...');
        expect(navbarInput.value).toBe('');
        await user.click(navbarInput)
        await user.type(navbarInput, 'o');
        const suggestionsList = await screen.findAllByRole('listitem');
        expect(suggestionsList).toHaveLength(8);
        await user.click(suggestionsList[0]);
        expect(screen.getByTestId('movie-name').textContent).toBe('Poor Things');
    });

    test('when in modal input is typed it shows suggestion list', async () => {
        render(<NavBar />)
        const user = userEvent.setup();
        const navbarInput = screen.getByPlaceholderText('Search movie...');
        expect(navbarInput.value).toBe('');
        await user.click(navbarInput)
        await user.type(navbarInput, 'o');
        const suggestionsList = await screen.findAllByRole('listitem');
        expect(suggestionsList).toHaveLength(8);
        await user.click(suggestionsList[0]);
        expect(screen.getByTestId('movie-name').textContent).toBe('Poor Things');
        const modalInput = screen.getByPlaceholderText('Search friend...');
        expect(modalInput.value).toBe('');
        await user.type(modalInput, 'e');
        const friendSuggestionsList = await screen.findAllByTestId('friend-suggestions');
        expect(friendSuggestionsList).toHaveLength(7);
    });
});