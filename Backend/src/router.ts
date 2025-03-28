import { Router } from 'express';
import multer  from 'multer';
import uploandConfig from './config/multer'

import { UsuariosControllers } from './Controllers/Usuarios/usuariosConstrollers';
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers';
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers';
import { HierarquiaCntrollers } from './Controllers/Hierarquia/HierarquiaControllers';
import { PedidoControllers } from './Controllers/Pedidos/PedidosControllers';
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers';

import { estaAutenticado } from './middleware/estaAutenticado';
const router = Router();
const upload = multer(uploandConfig.upload('./tmp'))

// Usuarios
router.post('/CadastroUsuarios', new UsuariosControllers().cadastro_usuarios);
router.get('/ConsultarUsuarios',estaAutenticado, new UsuariosControllers().consultar_usuarios);
router.post('/ConsultarUsuariosUnico',estaAutenticado,  new UsuariosControllers().consultarUsuariosUnico);
router.put('/AlterarDadosUsuarios',estaAutenticado,  new UsuariosControllers().alterarDadosUsuarios);
router.delete('/ApagarUsuarios/:id',estaAutenticado, new UsuariosControllers().apagarUsuarios);

// Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificarTokenUsuario', new LoginUsuariosControllers().verificaToken)

// Funcionarios
router.post('/CadastroFuncionarios', new FuncionariosControllers().cadastro_funcionarios);
router.get('/ConsultarFuncionarios',estaAutenticado, new FuncionariosControllers().consultar_funcionarios);

// Produtos
router.post('/CadastroProdutos',estaAutenticado, upload.single('file'), new ProdutosControllers().cadastro_produtos);


//Pedidos
router.post('/CadastroPedido', new PedidoControllers().cadastro_pedido)
router.post('/RealizarPedido', new PedidoControllers().criarPedido)
router.post('/AdicionarItensPedido', new PedidoControllers().adcionarItensPedido)

//Hierarquia
router.post('/CadastroHierarquia', new HierarquiaCntrollers().cadastro_hierarquia)
router.get('/listarHierarquia', new HierarquiaCntrollers().listarHierarquia)

export default router;
