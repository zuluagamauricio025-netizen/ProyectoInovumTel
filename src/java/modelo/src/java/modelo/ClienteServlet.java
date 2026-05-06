package servlets;

import modelo.Cliente;
import modelo.ClienteDAO;

import java.io.IOException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class ClienteServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Recibir datos del formulario
        String nombre = request.getParameter("nombre");
        String documento = request.getParameter("documento");
        String correo = request.getParameter("correo");

        // Crear objeto
        Cliente c = new Cliente();
        c.setNombre(nombre);
        c.setDocumento(documento);
        c.setCorreo(correo);

        // Guardar en BD
        ClienteDAO dao = new ClienteDAO();
        boolean guardado = dao.guardar(c);

        if (guardado) {
            response.sendRedirect("datoscliente.jsp");
        } else {
            response.getWriter().println("Error al guardar cliente");
        }
    }
}