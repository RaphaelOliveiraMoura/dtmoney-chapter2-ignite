import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionsTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            // className={type === 'deposit' ? 'active' : ''}
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
