const homeController = {
    index: (req, res) => {
        let imagensBanner = [
            {
                path: 'https://quotefancy.com/media/wallpaper/1600x900/2177262-Winston-Churchill-Quote-We-shall-not-flag-nor-fail-We-shall-go-on.jpg', 
                alt: '', 
                title: ''
            },
            {
                path: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e592622d-7071-4db1-adba-fe36052de0a2/d6fqqk1-1c5950d6-e1d3-4b0c-91e1-76de9a83403d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1OTI2MjJkLTcwNzEtNGRiMS1hZGJhLWZlMzYwNTJkZTBhMlwvZDZmcXFrMS0xYzU5NTBkNi1lMWQzLTRiMGMtOTFlMS03NmRlOWE4MzQwM2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IbFHA9JSu925n9bGTmmEWMxXVeZT6eZTSDWqTGNXE_A', 
                alt: '', 
                title: ''
            },
            {
                path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmDj9piWUEvx7NSFmdSNajEsbDDo1nywMy02VpEucjUmRTb1m2', 
                alt: '', 
                title: ''
            }
        ];

        let servicos = [
            {nome: 'Desenvolvimento Web', imagem: 'imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: 'imagens/undraw_social_dashboard.svg'},
            {nome: 'Consultoria UX', imagem: 'imagens/undraw_mobile_apps.svg'}
        ];

        res.render('index', { title: 'Home', listaImagensBanner: imagensBanner, listaServicos: servicos });
    }
}

module.exports = homeController;