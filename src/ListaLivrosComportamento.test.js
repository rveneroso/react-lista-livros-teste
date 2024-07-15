import { render, screen, fireEvent } from "@testing-library/react";
import ListaLivros from "./ListaLivros";
describe("Testes de comportamento", () => {
    test("click no botão Salvar", () => {
        render(<ListaLivros />);
        const botaoSalvar = screen.getByTestId("salvar");
        expect(console.log(botaoSalvar));
    });
    test("evento change e form submit", () => {
        const { container } = render(<ListaLivros />);
        //expect(console.log(container.innerHTML));
        const input = screen.getByTestId("titulo");
        const [ form ] = container.querySelectorAll("form");
        fireEvent.change(input, { target: { value: "React JS"} });
        fireEvent.submit(form);
        //expect(console.log(container.innerHTML));
        const livroItem = screen.getByTestId("ReactJS");
        const boleano = livroItem.hasChildNodes("ReactJS");
        expect(boleano).toBeTruthy();
    });

});