import {
  fireEvent,
  queryByText,
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import Home from "./index";
import { useData } from "../../contexts/DataContext";
import EventCard from "../../components/EventCard";

jest.mock("../../contexts/DataContext", () => ({
  useData: () => ({
    data: {
      events: Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        title: `Event ${i + 1}`,
        cover: `cover${i + 1}.jpg`,
        date: "2022-03-29T20:28:45.744Z",
        type: "soirée entreprise",
      })),
      people: [
        { id: 1, name: "Samira", position: "Manager", photo: "samira.jpg" },
        { id: 2, name: "Jean-baptiste", position: "Dev", photo: "jb.jpg" },
        { id: 3, name: "Alice", position: "Designer", photo: "alice.jpg" },
        { id: 4, name: "Luís", position: "DevOps", photo: "luis.jpg" },
        { id: 5, name: "Christine", position: "RH", photo: "christine.jpg" },
        { id: 6, name: "Isabelle", position: "PM", photo: "isabelle.jpg" },
      ],
    },
    error: null,
  }),
}));
describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const section = screen.getByTestId("events-section");
    const event = within(section).getAllByTestId("card-image-testid");
    expect(event.length).toEqual(9);
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Samira");
    await screen.findByText("Jean-baptiste");
    await screen.findByText("Alice");
    await screen.findByText("Luís");
    await screen.findByText("Christine");
    await screen.findByText("Isabelle");
  });
  it("a footer is displayed", async () => {
    render(<Home />);
    const footer = await screen.findByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", async () => {
    // to implement
  });
});
