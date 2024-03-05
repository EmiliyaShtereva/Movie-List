import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListItem from "./ListItem";

const movieInfo = {
        "img": "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        "name": "Poor Things",
        "duration": "2h 21min",
        "rating": "8.3",
        "synopsis": "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
        "invitedFriends": [
            {
                "id": "1",
                "name": "Jesica Hopkins"
            },
            {
                "id": "10",
                "name": "The big 3",
                "friends": [
                    "Nick Pekov",
                    "Nasko Kashona",
                    "Ekaterina Velika"
                ]
            },
            {
                "id": "3",
                "name": "Ema Stoyanova"
            },
            {
                "id": "4",
                "name": "Nick Pekov"
            },
            {
                "id": "6",
                "name": "Ekaterina Velika"
            }
        ],
        "id": "1"
    }

describe('ListItem', () => {
    test('when invite friends button is clicked it opens a modal', async () => {
        render(<ListItem duration={movieInfo.duration} invitedFriends={movieInfo.invitedFriends} id={movieInfo.id} img={movieInfo.img} name={movieInfo.name} rating={movieInfo.rating} synopsis={movieInfo.synopsis} />)
        const user = userEvent.setup();
        const inviteFriendsButton = await screen.findByText('Invite friends');
        await user.click(inviteFriendsButton);
        expect(screen.getByText('Invited Friends:')).toBeInTheDocument();
    });

    test('when more info button is clicked it opens a modal', async () => {
        render(<ListItem duration={movieInfo.duration} invitedFriends={movieInfo.invitedFriends} id={movieInfo.id} img={movieInfo.img} name={movieInfo.name} rating={movieInfo.rating} synopsis={movieInfo.synopsis} />)
        const user = userEvent.setup();
        const inviteFriendsButton = await screen.findByTestId('more-info');
        await user.click(inviteFriendsButton);
        expect(screen.getByTestId('movie-name').textContent).toBe('Poor Things');
    });

    test('when close button in modal is clicked it closes', async () => {
        render(<ListItem duration={movieInfo.duration} invitedFriends={movieInfo.invitedFriends} id={movieInfo.id} img={movieInfo.img} name={movieInfo.name} rating={movieInfo.rating} synopsis={movieInfo.synopsis} />)
        const user = userEvent.setup();
        const inviteFriendsButton = await screen.findByText('Invite friends');
        await user.click(inviteFriendsButton);
        expect(screen.getByText('Invited Friends:')).toBeInTheDocument();
        const closeButton = await screen.findByTestId('close');
        await user.click(closeButton); 
        expect(inviteFriendsButton).toBeInTheDocument();
    });

    test('when in modal input is typed it shows suggestion list', async () => {
        render(<ListItem duration={movieInfo.duration} invitedFriends={movieInfo.invitedFriends} id={movieInfo.id} img={movieInfo.img} name={movieInfo.name} rating={movieInfo.rating} synopsis={movieInfo.synopsis} />)
        const user = userEvent.setup();
        const inviteFriendsButton = await screen.findByText('Invite friends');
        await user.click(inviteFriendsButton);
        expect(screen.getByText('Invited Friends:')).toBeInTheDocument();
        const modalInput = screen.getByPlaceholderText('Search friend...');
        expect(modalInput.value).toBe('');
        await user.type(modalInput, 'e');
        const suggestionsList = await screen.findAllByRole('listitem');
        expect(suggestionsList).toHaveLength(7);
    });
});