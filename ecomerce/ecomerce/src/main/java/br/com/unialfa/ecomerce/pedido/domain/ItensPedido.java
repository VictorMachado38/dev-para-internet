package br.com.unialfa.ecomerce.pedido.domain;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class ItensPedido implements Serializable {

    @EmbeddedId
    private ItemPedidoId id;


    private int quantidade;

    public ItensPedido() {
    }

    public ItemPedidoId getId() {
        return id;
    }

    public void setId(ItemPedidoId id) {
        this.id = id;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItensPedido that = (ItensPedido) o;
        return quantidade == that.quantidade && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quantidade);
    }
}
