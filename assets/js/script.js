const anima = on
        const anima2 = off
        let ativo = false
        let intervalo
        let fundo = document.body

        // Animação piscar da vela acesa
        function iniciarAnimacao(element) {
            return setInterval(() => {
                ativo = !ativo
                element.classList.toggle('muda', ativo)
            }, 2000)
        }

        intervalo = iniciarAnimacao(anima) // Inicia a animação do bolo com vela acesa

        // Quando clica no bolo, apaga a vela
        anima.addEventListener('click', () => {
            anima.classList.add('desaparece') // Esconde o bolo com a vela acesa
            clearInterval(intervalo) // Para a animação do bolo com a vela acesa
            fundo.style.background = '#aaaaaa' //Muda a cor de fundo

            anima2.classList.add('aparece') // Mostra o bolo com a vela apagada
            intervalo = iniciarAnimacao(anima2) // Começa animação do bolo apagado
            intervalo = confettiExplosion(anima2) //Começa com confetes
        })

        // efeito de confete da biblioteca canvas
        function confettiExplosion() {
            confetti({
                particleCount: 200,
                spread: 200,
                origin: { y: 0.3 }
            })
        }

        confetti1.addEventListener('click', confettiExplosion) //confete ao clicar na imagem 1 apagada
        confetti2.addEventListener('click', confettiExplosion) //confete ao clicar na imagem 2 apagada

        //Quando clica no fosforo, ascende o bolo novamente
        fosforo.addEventListener('click', () => {
            anima.classList.remove('desaparece') // Mostra o bolo com a vela acesa
            anima2.classList.remove('aparece') // Esconde o bolo com a vela apagada
            fundo.style.background = '#1f1f1f' //Muda a cor de fundo para a original

            clearInterval(intervalo) // Limpa qualquer animação anterior
            intervalo = iniciarAnimacao(anima) // Reinicia animação do bolo aceso

        })