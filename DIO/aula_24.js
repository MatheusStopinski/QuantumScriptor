const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef);
})

//um laçoo que percorre a lista e chamando o callback que passamos pra dentro.