const nomes = ["Sir Cedric", "Lady Gwendolyn", "Sir Roland", "Lady Genevieve", "Sir Arthur", "Sir Tristan"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
