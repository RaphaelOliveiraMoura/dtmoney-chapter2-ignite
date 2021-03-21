import Modal from "react-modal";
import { Container, TransactionsTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" type="text" />
        <TransactionsTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Entrada" />
          </button>
        </TransactionsTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
