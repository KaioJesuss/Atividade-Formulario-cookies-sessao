import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const host = "0.0.0.0";
const port = 3002;
var listafornecedores = [];
var listaProdutos = [];
const app = express();

app.use(express.urlencoded({extended: true}));

app.use(session({
        secret: "Ch4v3s3cr3t4",
        resave: false,
        saveUnintialized: false,
        cookie: {
            maxAge: 1000 * 60 * 15,
            httpOnly: true,
            secure: false
        }
}));

app.use(cookieParser());


app.get("/", (requisicao, resposta)=>{
    resposta.send(`
                    <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">                            
                            <title>Login do Sistema</title>

                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                    .card{
                                        border: none;
                                        border-top: 5px solid  rgb(255, 255, 255);
                                        background:rgb(48, 15, 58);
                                        color:rgb(255, 255, 255);
                                    }
                                    p{
                                        font-weight: 600;
                                        font-size: 15px;
                                    }

                                    .division {
                                        text-align: center;
                                        margin: 5px 0;
                                    }

                                    .division .line {
                                        width: 85%;
                                        height: 2.5px;
                                        background-color:rgb(255, 255, 255);
                                        margin: 0 auto;
                                    }

                                    .text-below-line {
                                        margin-top: 10px;
                                        font-weight: 600;
                                        font-size: 14px;
                                        color: #aaa;
                                    }
                                    
                                    .myform{
                                        padding: 0 25px 0 33px;
                                    }
                                    .form-control {
                                        border: 1px solid (135deg, #4B0082, #FF69B4);
                                        border-radius: 3px;
                                        background:rgb(98, 59, 105);
                                        margin-bottom: 20px;
                                        letter-spacing: 1px;
                                        color: #fff;
                                        transition: background-color 0.3s ease;
                                    }

                                    .form-control:focus {
                                        background:rgb(98, 59, 105); 
                                        color: #fff;
                                        border-color: #4B0082;
                                        box-shadow: none;
                                    }
                                    .bn{
                                        text-decoration: underline;
                                    }
                                    .bn:hover{
                                        cursor: pointer;
                                    }
                                    .form-check-input {
                                        margin-top: 8px!important;
                                        }
                                    .btn-primary{
                                    background: linear-gradient(135deg, #4B0082, #FF69B4);
                                    border: none;
                                    border-radius: 50px;
                                    a
                                    }
                                    .btn-primary:focus{
                                        box-shadow: none;
                                        border: none;
                                    }
                                    small{
                                        color:rgb(255, 255, 255); 
                                    }
                                    .far.fa-user{
                                        font-size: 13px;
                                    }

                                    @media(min-width: 767px){
                                        .bn{
                                            text-align: right;
                                        }
                                    }
                                    @media(max-width: 767px){
                                        .form-check{
                                            text-align: center;
                                        }
                                        .bn{
                                            text-align: center;
                                            align-items: center;
                                        }
                                    }
                                    @media(max-width: 450px){
                                        .fab{
                                            width: 100%;
                                            height: 100%;
                                        }
                                        .division .line{
                                            width: 50%;
                                        }
                                    }

                                    .login-title {
                                        font-size: 28px;          
                                        font-weight: 800;         
                                        color:rgb(255, 255, 255);          
                                        text-align: center;       
                                        margin-bottom: 20px;      
                                        letter-spacing: 1.2px;    
                                        text-transform: uppercase; 
                                    }

                                    .label-custom {
                                        color: rgb(255, 255, 255); 
                                        font-weight: bold;
                                    }
                            </style>

                        </head>
                        <body>
                            <div class="container">
                                <div class="row d-flex justify-content-center mt-5">
                                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                        <div class="card py-3 px-2">
                                            <p class="login-title">Login</p>
                                            <div class="division">
                                                <div class="line"></div>
                                            </div>
                                            <form class="login" id="login" action="/Login" method="post">
                                                <div class="form-group">
                                                    <label for="usuario" class="label-custom">Usuário</label>
                                                    <input type="text"  id="usuario" name="usuario" class="form-control" placeholder="Usuário">
                                                </div>
                                                <div class="form-group">
                                                    <label for="senha" class="label-custom">Senha</label>
                                                    <input type="password"  id="senha" name="senha" class="form-control" placeholder="Senha">
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-12">
                                                        <div class="form-group form-check">
                                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                            <label class="form-check-label" for="exampleCheck1">Permaneça Conectado</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-12 bn">Esqueci a senha</div>
                                                </div>
                                                <div class="form-group mt-3 text-center"">
                                                    <button type="submit" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i>Entrar</small></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </body> 
                                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                    </html>       
        `);
 });   

app.post("/Login", (requisicao, resposta)=>{
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if(usuario == "admin" && senha == "123")
    {
        requisicao.session.logado = true;
        const dataHorasAtuais = new Date();
        resposta.cookie('ultimoLogin',dataHorasAtuais.toLocaleString(), { maxAge: 1000 * 60 * 60 * 24 * 30});
        resposta.redirect("/menu");
    }
    else 
    {
      resposta.send(`
                    <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">                            
                            <title>Login do Sistema</title>

                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                    .card{
                                        border: none;
                                        border-top: 5px solid  rgb(255, 255, 255);
                                        background:rgb(48, 15, 58);
                                        color:rgb(255, 255, 255);
                                    }
                                    p{
                                        font-weight: 600;
                                        font-size: 15px;
                                    }

                                    .division {
                                        text-align: center;
                                        margin: 5px 0;
                                    }

                                    .division .line {
                                        width: 85%;
                                        height: 2.5px;
                                        background-color:rgb(255, 255, 255);
                                        margin: 0 auto;
                                    }

                                    .text-below-line {
                                        margin-top: 10px;
                                        font-weight: 600;
                                        font-size: 14px;
                                        color: #aaa;
                                    }
                                    
                                    .myform{
                                        padding: 0 25px 0 33px;
                                    }
                                    .form-control {
                                        border: 1px solid (135deg, #4B0082, #FF69B4);
                                        border-radius: 3px;
                                        background:rgb(98, 59, 105);
                                        margin-bottom: 20px;
                                        letter-spacing: 1px;
                                        color: #fff;
                                        transition: background-color 0.3s ease;
                                    }

                                    .form-control:focus {
                                        background:rgb(98, 59, 105); 
                                        color: #fff;
                                        border-color: #4B0082;
                                        box-shadow: none;
                                    }
                                    .bn{
                                        text-decoration: underline;
                                    }
                                    .bn:hover{
                                        cursor: pointer;
                                    }
                                    .form-check-input {
                                        margin-top: 8px!important;
                                        }
                                    .btn-primary{
                                    background: linear-gradient(135deg, #4B0082, #FF69B4);
                                    border: none;
                                    border-radius: 50px;
                                    a
                                    }
                                    .btn-primary:focus{
                                        box-shadow: none;
                                        border: none;
                                    }
                                    small{
                                        color:rgb(255, 255, 255); 
                                    }
                                    .far.fa-user{
                                        font-size: 13px;
                                    }

                                    @media(min-width: 767px){
                                        .bn{
                                            text-align: right;
                                        }
                                    }
                                    @media(max-width: 767px){
                                        .form-check{
                                            text-align: center;
                                        }
                                        .bn{
                                            text-align: center;
                                            align-items: center;
                                        }
                                    }
                                    @media(max-width: 450px){
                                        .fab{
                                            width: 100%;
                                            height: 100%;
                                        }
                                        .division .line{
                                            width: 50%;
                                        }
                                    }

                                    .login-title {
                                        font-size: 28px;          
                                        font-weight: 800;         
                                        color:rgb(255, 255, 255);          
                                        text-align: center;       
                                        margin-bottom: 20px;      
                                        letter-spacing: 1.2px;    
                                        text-transform: uppercase; 
                                    }

                                    .label-custom {
                                        color: rgb(255, 255, 255); 
                                        font-weight: bold;
                                    }
                            </style>

                        </head>
                        <body>
                            <div class="container">
                                <div class="row d-flex justify-content-center mt-5">
                                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                        <div class="card py-3 px-2">
                                            <p class="login-title">Login</p>
                                            <div class="division">
                                                <div class="line"></div>
                                            </div>
                                            <form class="login" id="login" action="/Login" method="post">
                                                <div class="form-group">
                                                    <label for="usuario" class="label-custom">Usuário</label>
                                                    <input type="text"  id="usuario" name="usuario" class="form-control" placeholder="Usuário">
                                                </div>
                                                <div class="form-group">
                                                    <label for="senha" class="label-custom">Senha</label>
                                                    <input type="password"  id="senha" name="senha" class="form-control" placeholder="Senha">
                                                </div>
                                                <span style="color: red;">Usuário ou Senha Inválidos</span>
                                                <div class="row">
                                                    <div class="col-md-6 col-12">
                                                        <div class="form-group form-check">
                                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                            <label class="form-check-label" for="exampleCheck1">Permaneça Conectado</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-12 bn">Esqueci a senha</div>
                                                </div>
                                                <div class="form-group mt-3 text-center"">
                                                    <button type="submit" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i>Entrar</small></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </body> 
                                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                    </html>       
        `);
    }
});

app.get("/menu", verificarAutenticacao, (requisicao, resposta) => {
    const ultimoLogin = requisicao.cookies.ultimoLogin;
    resposta.send(`

        <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                .navbar {
                                    background-color: #F8D5FF !important;
                                }

                                .navbar-brand, .nav-link, .dropdown-item {
                                    color: #4B0082 !important;
                                }

                                .dropdown-menu {
                                    background-color: #F8D5FF ;
                                }

                                .form-control {
                                    background-color: #2A1A5E;
                                    color: #F8D5FF;
                                    border: 1px solid #6C4AB6;
                                }

                                .form-control:focus {
                                    background-color: #3C2A79;
                                    color: #fff;
                                    border-color: #B06AFD;
                                    box-shadow: none;
                                }

                                label {
                                    color: #F8D5FF;
                                }

                                h2 {
                                    color: #ffffff;
                                }

                                .btn-primary {
                                    background-color: #B06AFD;
                                    border: none;
                                }

                                .btn-secondary {
                                    background-color: #6C4AB6;
                                    border: none;
                                }

                                .btn:hover {
                                    opacity: 0.9;
                                }
                            </style>

                    </head>
                        <body>
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">MENU</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Opções
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastro de Fornecedor</a></li>
                                                        <li><a class="dropdown-item" href="/cadastroproduto">Cadastro de Produto</a></li>
                                                    </ul>
     
                                                </li>
                                            </ul>

                                            <ul class="navbar-nav ms-auto">
                                                    <li class="nav-item">
                                                        <span style="color: black;">${ultimoLogin?"Ultimo Acesso: "+ultimoLogin:""}</span>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Logout">Sair</a>
                                                    </li>
                                            </ul>
                                    </div>
                                </div>
                            </nav>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
                `)
            resposta.end();
});


app.get("/cadastrofornecedor", verificarAutenticacao, (requisicao, resposta) =>{

    resposta.send(` 
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    background-color: rgba(255, 255, 255, 0.95);
                                    padding: 2rem;
                                    border-radius: 1rem;
                                    box-shadow: 0 0 20px rgba(0,0,0,0.3);
                                    margin-top: 3rem;
                                    color: #333;
                                }
                                h2 {
                                    color: #4B0082;
                                    font-weight: bold;
                                }
                                .btn-primary {
                                    background-color: #4B0082;
                                    border-color: #4B0082;
                                }
                                .btn-primary:hover {
                                    background-color: #370060;
                                    border-color: #370060;
                                }
                                .btn-secondary {
                                    background-color: #FF69B4;
                                    border-color: #FF69B4;
                                    color: #fff;
                                }
                                .btn-secondary:hover {
                                    background-color: #e055a0;
                                    border-color: #e055a0;
                                }
                                label {
                                    font-weight: bold;
                                }
                            </style>
                        
                    </head>
                        <body>
                            <div class="container w-85 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Fornecedor</h2>
                                    </div>
                                    <form method="POST" action="/cadastrofornecedor" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">
                                                <label for="inputrazaosocial">Razão Social</label>
                                                <input type="text" class="form-control" id="razaosocial" name="razaosocial" placeholder="Razão Social">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputcnpj">CNPJ</label>
                                                <input type="text" class="form-control" id="cnpj" name="cnpj"placeholder="00.000.000/0000-00">
                                            </div>
                                        </div>
                                        
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">
                                                <label for="inputfantasia">Nome Fantasia</label>
                                                <input type="text" class="form-control" id="Nfantasia" name="fantasia" placeholder="Nome Fantasia">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="inputRua">Endereço - Rua</label>
                                            <input type="text" class="form-control" id="inputRua" name="rua" placeholder="Rua, nº">
                                        </div>

                                        <div class="form-row row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCidade">Cidade</label>
                                                <input type="text" class="form-control" id="inputCidade" name="cidade" placeholder="Cidade">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputEstado">Estado</label>
                                                <select id="inputEstado" name="estado" class="form-control">
                                                    <option value=""selected>Escolher...</option>
                                                    <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
                                                    <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
                                                    <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
                                                    <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
                                                    <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
                                                    <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
                                                    <option>SP</option><option>SE</option><option>TO</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputCEP">CEP</label>
                                                <input type="text" class="form-control" id="inputCEP" name="cep" placeholder="00000-000">
                                            </div>
                                        </div>

                                        <div class="form-group col-md-5">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" class="form-control" id="inputEmail" name="email" placeholder="exemplo@dominio.com">
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="inputTelefone">Telefone</label>
                                            <input type="tel" class="form-control" id="inputTelefone" name="telefone" placeholder="(00) 00000-0000">
                                        </div>

                                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `);
        resposta.end();
});

app.post("/cadastrofornecedor", verificarAutenticacao, (requisicao, resposta) => {

    const razaosocial = requisicao.body.razaosocial
    const cnpj = requisicao.body.cnpj
    const fantasia = requisicao.body.fantasia
    const rua = requisicao.body.rua;
    const cidade = requisicao.body.cidade
    const estado = requisicao.body.estado
    const cep = requisicao.body.cep
    const email = requisicao.body.email
    const telefone = requisicao.body.telefone

        if(razaosocial && cnpj && fantasia && rua && cidade && estado && cep && email && telefone)
    {    
        listafornecedores.push({
            razaosocial,
            cnpj,
            fantasia,
            rua,
            cidade,
            estado,
            cep,
            email,
            telefone,
        });
        resposta.redirect("/listafornecedores");
    }
    else
    {
    
        let conteudo = `
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    background-color: rgba(255, 255, 255, 0.95);
                                    padding: 2rem;
                                    border-radius: 1rem;
                                    box-shadow: 0 0 20px rgba(0,0,0,0.3);
                                    margin-top: 3rem;
                                    color: #333;
                                }
                                h2 {
                                    color: #4B0082;
                                    font-weight: bold;
                                }
                                .btn-primary {
                                    background-color: #4B0082;
                                    border-color: #4B0082;
                                }
                                .btn-primary:hover {
                                    background-color: #370060;
                                    border-color: #370060;
                                }
                                .btn-secondary {
                                    background-color: #FF69B4;
                                    border-color: #FF69B4;
                                    color: #fff;
                                }
                                .btn-secondary:hover {
                                    background-color: #e055a0;
                                    border-color: #e055a0;
                                }
                                label {
                                    font-weight: bold;
                                }
                            </style>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Fornecedor</h2>
                                    </div>
                                    <form method="POST" action="/cadastrofornecedor" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8"> `;
                   
                                                if (!razaosocial) {
                                                conteudo = conteudo + `
                                                    <label for="razaoSocial">Razão Social</label>
                                                    <input type="text"  class="form-control is-invalid" id="razaoSocial" name="razaosocial" value="${razaosocial || ''}" placeholder="Razão Social">
                                                    <span class="text-danger">Insira a Razão Social</span>
                                                `;
                                                } else {
                                                conteudo = conteudo + `
                                                    <label for="razaoSocial">Razão Social</label>
                                                    <input type="text" class="form-control" id="razaoSocial" name="razaosocial" value="${razaosocial}" placeholder="Razão Social">
                                                `;
                                                }
                                        conteudo = conteudo + `</div>

                                            <div class="form-group col-md-4"> `;
                                                if (!cnpj) {
                                                conteudo = conteudo + `
                                                    <label for="cnpj">CNPJ</label>
                                                    <input type="text"  class="form-control is-invalid" id="cnpj" name="cnpj" value="${cnpj || ''}" placeholder="CNPJ">
                                                    <span class="text-danger">Insira o CNPJ</span>
                                                `;
                                                } else {
                                                conteudo = conteudo + `
                                                    <label for="cnpj">CNPJ</label>
                                                    <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}" placeholder="CNPJ">
                                                `;
                                                }
                                        conteudo = conteudo + `</div>

                                        
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">`;
                                                if (!fantasia) {
                                                conteudo = conteudo + `
                                                    <label for="nomeFantasia">Nome Fantasia</label>
                                                    <input type="text"  class="form-control is-invalid" id="nomeFantasia" name="fantasia" value="${fantasia || ''}" placeholder="Nome Fantasia">
                                                    <span class="text-danger">Insira o nome fantasia</span>
                                                `;
                                                } else {
                                                conteudo = conteudo + `
                                                    <label for="nomeFantasia">Nome Fantasia</label>
                                                    <input type="text" class="form-control" id="nomeFantasia" name="fantasia" value="${fantasia}" placeholder="Nome Fantasia">
                                                `;
                                                }
                                                
                                            conteudo = conteudo + `</div>

                                            </div>

                                            <div class="form-group col-md-4">`;
                                                if (!rua) {
                                                    conteudo = conteudo + `
                                                        <label for="inputRua">Endereço - Rua</label>
                                                        <input type="text" class="form-control is-invalid" id="inputRua" name="rua" value="" placeholder="Rua, nº">
                                                        <span class="text-danger">Insira o endereço</span>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                        <label for="inputRua">Endereço - Rua</label>
                                                        <input type="text" class="form-control" id="inputRua" name="rua" value="${rua}" placeholder="Rua, nº">
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>

                                        <div class="form-row row">
                                            <div class="form-group col-md-4">`;
                                            if (!cidade) {
                                                    conteudo = conteudo + `
                                                            <label for="inputCidade">Cidade</label>
                                                            <input type="text" class="form-control is-invalid" id="inputCidade" name="cidade" value="" placeholder="Cidade">
                                                            <span class="text-danger">Insira a cidade</span> 
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                            <label for="inputCidade">Cidade</label>
                                                            <input type="text" class="form-control" id="inputCidade" name="cidade" value="${cidade}" placeholder="Cidade">
                                                        
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>
                                            <div class="form-group col-md-4">`;
                                                if (!estado ) {
                                                    conteudo = conteudo + `
                                                    <div class="col-md-8 mb-4">
                                                        <label for="estado">Estado</label>
                                                        <select class="form-select is-invalid" id="estado" name="estado">
                                                            <option value="" selected>UF</option>
                                                            <option value="SP">SP</option>
                                                            <option value="RJ">RJ</option>
                                                            <option value="MG">MG</option>
                                                            <option value="RS">RS</option>
                                                        </select>
                                                        <p class="text-danger">Informe a UF</p>
                                                    </div>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                    <div class="col-md-8 mb-4">
                                                        <label for="estado">UF</label>
                                                        <select class="form-select" id="estado" name="estado">
                                                            <option value="" ${!estado ? 'selected' : ''}>UF</option>
                                                            <option value="SP" ${estado === 'SP' ? 'selected' : ''}>SP</option>
                                                            <option value="RJ" ${estado === 'RJ' ? 'selected' : ''}>RJ</option>
                                                            <option value="MG" ${estado === 'MG' ? 'selected' : ''}>MG</option>
                                                            <option value="RS" ${estado === 'RS' ? 'selected' : ''}>RS</option>
                                                        </select>
                                                        <p class="text-danger"></p>
                                                    </div>
                                                    `;
                                                }
                                                conteudo = conteudo + `</div>
                                            
                                            <div class="form-group col-md-2">`;
                                            if (!cep) {
                                                conteudo = conteudo + `
                                                        <label for="inputCEP">CEP</label>
                                                        <input type="text" class="form-control is-invalid" id="inputCEP" name="cep" value="" placeholder="00000-000">
                                                        <span class="text-danger">Informe o CEP</span>
                                                `;
                                            } else {
                                                conteudo = conteudo + `
                                                        <label for="inputCEP">CEP</label>
                                                        <input type="text" class="form-control" id="inputCEP" name="cep" value="${cep}" placeholder="00000-000">
                                                `;
                                            }
                                            conteudo = conteudo + `</div>

                                        <div class="form-group">`;
                                            if (!email) {
                                            conteudo = conteudo + `
                                                <label for="email">Email</label>
                                                <input type="email"  class="form-control is-invalid" id="email" name="email" value="${email || ''}" placeholder="email@exemplo.com">
                                                <span class="text-danger">Insira um email válido</span>
                                            `;
                                            } else {
                                            conteudo = conteudo + `
                                                <label for="email">Email</label>
                                                <input type="email" class="form-control" id="email" name="email" value="${email}" placeholder="email@exemplo.com">
                                            `;
                                            }
                                        conteudo = conteudo + `</div>

                                        <div class="form-group">`;
                                            if (!telefone) {
                                            conteudo = conteudo + `
                                                <label for="telefone">Telefone</label>
                                                <input type="tel"  class="form-control is-invalid" id="telefone" name="telefone" value="${telefone || ''}" placeholder="(00) 00000-0000">
                                                <span class="text-danger">Insira o telefone</span>
                                            `;
                                            } else {
                                            conteudo = conteudo + `
                                                <label for="telefone">Telefone</label>
                                                <input type="tel" class="form-control" id="telefone" name="telefone" value="${telefone}" placeholder="(00) 00000-0000">
                                            `;
                                            }
                                        conteudo = conteudo + `</div>
                                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `;
        resposta.send(conteudo);
        resposta.end();
    }
});

app.get("/listafornecedores", verificarAutenticacao, (requisicao, resposta) => {
    let conteudo=`
            <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                        <style>
                            body {
                                background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e rosa */
                                color: #fff;
                                font-family: Arial, sans-serif;
                            }
                            .container {
                                background-color: rgba(255, 255, 255, 0.95);
                                padding: 2rem;
                                border-radius: 1rem;
                                box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                                margin-top: 3rem;
                                color: #333;
                            }
                            h2 {
                                color: #4B0082;
                                font-weight: bold;
                                margin-bottom: 1.5rem;
                            }
                            .btn-secondary {
                                background-color: #FF69B4;
                                border-color: #FF69B4;
                                color: #fff;
                                margin-top: 1rem;
                            }
                            .btn-secondary:hover {
                                background-color: #e055a0;
                                border-color: #e055a0;
                            }
                            table th {
                                background-color: #4B0082;
                                color: #fff;
                            }
                            table tbody tr:hover {
                                background-color: #f2e6ff;
                                color: #000;
                            }
                            .custom-table {
                                width: 100%;
                                border-collapse: collapse;
                                background-color: #fff; /* fundo branco */
                                color: #333; /* texto escuro */
                            }

                            .custom-table th {
                                background-color: #4B0082;
                                color: #fff;
                                padding: 10px;
                            }

                            .custom-table td {
                                background-color: #f9f9f9; /* tom claro nas células */
                                padding: 10px;
                                border: 1px solid #ddd;
                            }

                            .custom-table tbody tr:hover {
                                background-color: #f2e6ff; /* hover lilás claro */
                            }

                            @media (max-width: 768px) {
                            .custom-table {
                                width: 100%;
                                display: block;
                                overflow-x: auto;
                                white-space: nowrap;
                            }
}

                        </style>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda2 w-20 mb-5 mt-5">
                                        <h2>Fornecedores Cadastrados</h2>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="custom-table">
                                            <thead>

                                                <tr>
                                                    <th scope="col">Razão Social</th>
                                                    <th scope="col">CNPJ</th>
                                                    <th scope="col">Nome Fantasia</th>
                                                    <th scope="col">Rua</th>
                                                    <th scope="col">Cidade</th>
                                                    <th scope="col">UF</th>
                                                    <th scope="col">CEP</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Telefone</th>
                                                </tr>
                                            </thead>
                                            <tbody>`;
                                                for(let i=0; i < listafornecedores.length; i++)
                                                {
                                                    conteudo = conteudo + `
                                                    </tr>
                                                        <td>${listafornecedores[i].razaosocial}</td>
                                                        <td>${listafornecedores[i].cnpj}</td>
                                                        <td>${listafornecedores[i].fantasia}</td>
                                                        <td>${listafornecedores[i].rua}</td>
                                                        <td>${listafornecedores[i].cidade}</td>
                                                        <td>${listafornecedores[i].estado}</td>
                                                        <td>${listafornecedores[i].cep}</td>
                                                        <td>${listafornecedores[i].email}</td>
                                                        <td>${listafornecedores[i].telefone}</td>
                                                    </tr>
                                                    `;
                                                }
                conteudo=conteudo + `    </tbody>
                                        </table>
                                     </div>
                                <a class="btn btn-secondary" href="/cadastrofornecedor">Continuar Cadastrando</a>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
            </html>`
    resposta.send(conteudo);
    resposta.end();
});

app.get("/cadastroproduto", verificarAutenticacao, (requisicao, resposta) =>{

    resposta.send(` 
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    background-color: rgba(255, 255, 255, 0.95);
                                    padding: 2rem;
                                    border-radius: 1rem;
                                    box-shadow: 0 0 20px rgba(0,0,0,0.3);
                                    margin-top: 3rem;
                                    color: #333;
                                }
                                h2 {
                                    color: #4B0082;
                                    font-weight: bold;
                                }
                                .btn-primary {
                                    background-color: #4B0082;
                                    border-color: #4B0082;
                                }
                                .btn-primary:hover {
                                    background-color: #370060;
                                    border-color: #370060;
                                }
                                .btn-secondary {
                                    background-color: #FF69B4;
                                    border-color: #FF69B4;
                                    color: #fff;
                                }
                                .btn-secondary:hover {
                                    background-color: #e055a0;
                                    border-color: #e055a0;
                                }
                                label {
                                    font-weight: bold;
                                }
                                
                            </style>
                        
                    </head>
                        <body>
                            <div class="container w-85 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">                                                                
                                        <h2>Cadastro de Produto</h2>
                                    </div>
                                    <form method="POST" action="/cadastroproduto" class="row g-3 border p-2">

                                        <div class="col-md-4">
                                            <label for="codigoBarras">Código de Barras</label>
                                            <input type="text" class="form-control" id="codigoBarras" name="codigoBarras" placeholder="0000000000000">
                                        </div>

                                        <div class="col-md-8">
                                            <label for="descricao">Descrição do Produto</label>
                                            <input type="text" class="form-control" id="descricao" name="descricao" placeholder="Digite a descrição do produto">
                                        </div>

                                        <div class="col-md-3">
                                            <label for="precoCusto">Preço de Custo</label>
                                            <input type="number" step="0.01" class="form-control" id="precoCusto" name="precoCusto" placeholder="0,00">
                                        </div>

                                        <div class="col-md-3">
                                            <label for="precoVenda">Preço de Venda</label>
                                            <input type="number" step="0.01" class="form-control" id="precoVenda" name="precoVenda" placeholder="0,00">
                                        </div>

                                        <div class="col-md-4">
                                            <label for="dataValidade">Data de Validade</label>
                                            <input type="date" class="form-control" id="dataValidade" name="dataValidade">
                                        </div>

                                        <div class="col-md-2">
                                            <label for="qtdEstoque">Qtd em Estoque</label>
                                            <input type="number" class="form-control" id="qtdEstoque" name="qtdEstoque" placeholder="0">
                                        </div>

                                        <div class="col-md-6">
                                            <label for="fabricante">Nome do Fabricante</label>
                                            <input type="text" class="form-control" id="fabricante" name="fabricante" placeholder="Digite o nome do fabricante">
                                        </div>

                                        <button class="btn btn-primary mt-3" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary mt-3" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `);
        resposta.end();
});

app.post("/cadastroproduto", verificarAutenticacao, (requisicao, resposta) => {

    const codigoBarras = requisicao.body.codigoBarras;
    const descricao = requisicao.body.descricao;
    const precoCusto = Number(requisicao.body.precoCusto.replace(',', '.'));
    const precoVenda = Number(requisicao.body.precoVenda.replace(',', '.'));
    const dataValidade = requisicao.body.dataValidade;
    const qtdEstoque = Number(requisicao.body.qtdEstoque);
    const fabricante = requisicao.body.fabricante;

    if (codigoBarras && descricao && precoCusto && precoVenda && dataValidade && qtdEstoque && fabricante) {
        listaProdutos.push({
            codigoBarras,
            descricao,
            precoCusto,
            precoVenda,
            dataValidade,
            qtdEstoque,
            fabricante,
        });
        resposta.redirect("/listaProdutos");
    }
       else
    {
    
        let conteudo = `
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                            <style>
                                body {
                                    background: linear-gradient(135deg, #4B0082, #FF69B4); /* Roxo e Rosa */
                                    color: #fff;
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    background-color: rgba(255, 255, 255, 0.95);
                                    padding: 2rem;
                                    border-radius: 1rem;
                                    box-shadow: 0 0 20px rgba(0,0,0,0.3);
                                    margin-top: 3rem;
                                    color: #333;
                                }
                                h2 {
                                    color: #4B0082;
                                    font-weight: bold;
                                }
                                .btn-primary {
                                    background-color: #4B0082;
                                    border-color: #4B0082;
                                }
                                .btn-primary:hover {
                                    background-color: #370060;
                                    border-color: #370060;
                                }
                                .btn-secondary {
                                    background-color: #FF69B4;
                                    border-color: #FF69B4;
                                    color: #fff;
                                }
                                .btn-secondary:hover {
                                    background-color: #e055a0;
                                    border-color: #e055a0;
                                }
                                label {
                                    font-weight: bold;
                                }
                            </style>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Produtos</h2>
                                    </div>
                                    <form method="POST" action="/cadastroproduto" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8"> `;
                   
                                                if (!codigoBarras) {
                                                    conteudo += `
                                                        <div class="col-md-4">
                                                            <label for="codigoBarras">Código de Barras</label>
                                                            <input type="text" class="form-control is-invalid" id="codigoBarras" name="codigoBarras" value="${codigoBarras || ''}" placeholder="0000000000000">
                                                            <span class="text-danger">Insira o código de barras</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-4">
                                                            <label for="codigoBarras">Código de Barras</label>
                                                            <input type="text" class="form-control" id="codigoBarras" name="codigoBarras" value="${codigoBarras}" placeholder="0000000000000">
                                                        </div>
                                                    `;
                                                }

                                                if (!descricao) {
                                                    conteudo += `
                                                        <div class="col-md-8">
                                                            <label for="descricao">Descrição do Produto</label>
                                                            <input type="text" class="form-control is-invalid" id="descricao" name="descricao" value="${descricao || ''}" placeholder="Digite a descrição do produto">
                                                            <span class="text-danger">Insira a descrição do produto</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-8">
                                                            <label for="descricao">Descrição do Produto</label>
                                                            <input type="text" class="form-control" id="descricao" name="descricao" value="${descricao}" placeholder="Digite a descrição do produto">
                                                        </div>
                                                    `;
                                                }

                                                if (!precoCusto) {
                                                    conteudo += `
                                                        <div class="col-md-3">
                                                            <label for="precoCusto">Preço de Custo</label>
                                                            <input type="number" step="0.01" class="form-control is-invalid" id="precoCusto" name="precoCusto" value="${precoCusto || ''}" placeholder="0,00">
                                                            <span class="text-danger">Insira o preço de custo</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-3">
                                                            <label for="precoCusto">Preço de Custo</label>
                                                            <input type="number" step="0.01" class="form-control" id="precoCusto" name="precoCusto" value="${precoCusto}" placeholder="0,00">
                                                        </div>
                                                    `;
                                                }

                                                if (!precoVenda) {
                                                    conteudo += `
                                                        <div class="col-md-3">
                                                            <label for="precoVenda">Preço de Venda</label>
                                                            <input type="number" step="0.01" class="form-control is-invalid" id="precoVenda" name="precoVenda" value="${precoVenda || ''}" placeholder="0,00">
                                                            <span class="text-danger">Insira o preço de venda</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-3">
                                                            <label for="precoVenda">Preço de Venda</label>
                                                            <input type="number" step="0.01" class="form-control" id="precoVenda" name="precoVenda" value="${precoVenda}" placeholder="0,00">
                                                        </div>
                                                    `;
                                                }

                                                if (!dataValidade) {
                                                    conteudo += `
                                                        <div class="col-md-4">
                                                            <label for="dataValidade">Data de Validade</label>
                                                            <input type="date" class="form-control is-invalid" id="dataValidade" name="dataValidade" value="${dataValidade || ''}">
                                                            <span class="text-danger">Informe a data de validade</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-4">
                                                            <label for="dataValidade">Data de Validade</label>
                                                            <input type="date" class="form-control" id="dataValidade" name="dataValidade" value="${dataValidade}">
                                                        </div>
                                                    `;
                                                }

                                                if (!qtdEstoque) {
                                                    conteudo += `
                                                        <div class="col-md-2">
                                                            <label for="qtdEstoque">Qtd em Estoque</label>
                                                            <input type="number" class="form-control is-invalid" id="qtdEstoque" name="qtdEstoque" value="${qtdEstoque || ''}" placeholder="0">
                                                            <span class="text-danger">Informe a quantidade em estoque</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-2">
                                                            <label for="qtdEstoque">Qtd em Estoque</label>
                                                            <input type="number" class="form-control" id="qtdEstoque" name="qtdEstoque" value="${qtdEstoque}" placeholder="0">
                                                        </div>
                                                    `;
                                                }

                                                if (!fabricante) {
                                                    conteudo += `
                                                        <div class="col-md-6">
                                                            <label for="fabricante">Nome do Fabricante</label>
                                                            <input type="text" class="form-control is-invalid" id="fabricante" name="fabricante" value="${fabricante || ''}" placeholder="Digite o nome do fabricante">
                                                            <span class="text-danger">Informe o nome do fabricante</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo += `
                                                        <div class="col-md-6">
                                                            <label for="fabricante">Nome do Fabricante</label>
                                                            <input type="text" class="form-control" id="fabricante" name="fabricante" value="${fabricante}" placeholder="Digite o nome do fabricante">
                                                        </div>
                                                    `;
                                                }

                                                conteudo += `
                                                    <div class="col-12 d-flex gap-2">
                                                        <button class="btn btn-primary mt-3" type="submit">Cadastrar</button>
                                                        <a class="btn btn-secondary mt-3" href="/">Voltar</a>
                                                    </div>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `;
        resposta.send(conteudo);
        resposta.end();
    }
});

app.get("/listaProdutos", verificarAutenticacao, (requisicao, resposta) => {
    let conteudo = `
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                <title>Lista de Produtos</title>
                <style>
                    body {
                        background: linear-gradient(135deg, #4B0082, #FF69B4);
                        color: #fff;
                        font-family: Arial, sans-serif;
                    }
                    .container {
                        background-color: rgba(255, 255, 255, 0.95);
                        padding: 2rem;
                        border-radius: 1rem;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                        margin-top: 3rem;
                        color: #333;
                    }
                    h2 {
                        color: #4B0082;
                        font-weight: bold;
                        margin-bottom: 1.5rem;
                    }
                    .btn-secondary {
                        background-color: #FF69B4;
                        border-color: #FF69B4;
                        color: #fff;
                        margin-top: 1rem;
                    }
                    .btn-secondary:hover {
                        background-color: #e055a0;
                        border-color: #e055a0;
                    }
                    table th {
                        background-color: #4B0082;
                        color: #fff;
                    }
                    table tbody tr:hover {
                        background-color: #f2e6ff;
                        color: #000;
                    }
                    .custom-table {
                        width: 100%;
                        border-collapse: collapse;
                        background-color: #fff;
                        color: #333;
                    }
                    .custom-table th {
                        background-color: #4B0082;
                        color: #fff;
                        padding: 10px;
                    }
                    .custom-table td {
                        background-color: #f9f9f9;
                        padding: 10px;
                        border: 1px solid #ddd;
                    }
                    .custom-table tbody tr:hover {
                        background-color: #f2e6ff;
                    }
                    @media (max-width: 768px) {
                        .custom-table {
                            width: 100%;
                            display: block;
                            overflow-x: auto;
                            white-space: nowrap;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container w-95 mb-10">
                    <div class="Legenda2 w-20 mb-5 mt-5">
                        <h2>Produtos Cadastrados</h2>
                    </div>

                    <div class="table-responsive">
                        <table class="custom-table">
                            <thead>
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Preço de Custo</th>
                                    <th scope="col">Preço de Venda</th>
                                    <th scope="col">Data de Validade</th>
                                    <th scope="col">Estoque</th>
                                    <th scope="col">Fornecedor</th>
                                </tr>
                            </thead>
                            <tbody>`;

                            for (let i = 0; i < listaProdutos.length; i++) {
                                conteudo += `
                                    <tr>
                                        <td>${listaProdutos[i].codigoBarras ?? ''}</td>
                                        <td>${listaProdutos[i].descricao ?? ''}</td>
                                        <td>R$ ${listaProdutos[i].precoCusto ? listaProdutos[i].precoCusto.toFixed(2).replace('.', ',') : '0,00'}</td>
                                        <td>R$ ${listaProdutos[i].precoVenda ? listaProdutos[i].precoVenda.toFixed(2).replace('.', ',') : '0,00'}</td>
                                        <td>${listaProdutos[i].dataValidade ? new Date(listaProdutos[i].dataValidade).toLocaleDateString('pt-BR') : ''}</td>
                                        <td>${listaProdutos[i].qtdEstoque ?? ''}</td>
                                        <td>${listaProdutos[i].fabricante ?? ''}</td>
                                    </tr>`;
                            }

    conteudo += `        </tbody>
                        </table>
                    </div>
                    <a class="btn btn-secondary" href="/cadastroproduto">Continuar Cadastrando</a>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
            </body>
        </html>`;
    
    resposta.send(conteudo);
    resposta.end();
});

function verificarAutenticacao(requisicao, resposta, next)
{
    if(requisicao.session.logado)
    {
        next();
    }
    else
    {
        resposta.redirect("/");
    }
}
app.get("/Logout", (requisicao, resposta)=>{
    requisicao.session.destroy();
    resposta.redirect("/");
});

app.listen(port, host, () => {
    console.log(`Servidor em execução em http://localhost:${port}/`);
});
