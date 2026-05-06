package modelo;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ClienteDAO {

    // INSERTAR CLIENTE
    public boolean guardar(Cliente c) {

        String sql = "INSERT INTO clientes(nombre, documento, correo) VALUES(?,?,?)";

        try {
            Connection con = Conexion.getConexion();
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, c.getNombre());
            ps.setString(2, c.getDocumento());
            ps.setString(3, c.getCorreo());

            ps.executeUpdate();

            return true;

        } catch (Exception e) {
            System.out.println("Error guardar cliente: " + e);
            return false;
        }
    }

    // LISTAR CLIENTES
    public List<Cliente> listar() {

        List<Cliente> lista = new ArrayList<>();

        String sql = "SELECT * FROM clientes";

        try {
            Connection con = Conexion.getConexion();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {

                Cliente c = new Cliente();

                c.setId(rs.getInt("id"));
                c.setNombre(rs.getString("nombre"));
                c.setDocumento(rs.getString("documento"));
                c.setCorreo(rs.getString("correo"));

                lista.add(c);
            }

        } catch (Exception e) {
            System.out.println("Error listar: " + e);
        }

        return lista;
    }
}