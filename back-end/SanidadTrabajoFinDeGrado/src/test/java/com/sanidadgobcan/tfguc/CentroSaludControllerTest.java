/*
 * package com.sanidadgobcan.tfguc;
 * 
 * import static org.mockito.Mockito.reset; import static
 * org.mockito.Mockito.when; import static
 * org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
 * import static
 * org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
 * 
 * import java.util.ArrayList; import java.util.Optional;
 * 
 * import org.junit.jupiter.api.Test; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest; import
 * org.springframework.boot.test.mock.mockito.MockBean; import
 * org.springframework.http.HttpStatus; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.test.web.servlet.MockMvc; import
 * org.springframework.test.web.servlet.MvcResult; import
 * org.springframework.util.MimeTypeUtils;
 * 
 * import com.fasterxml.jackson.databind.ObjectMapper; import
 * com.sanidadgobcan.tfguc.controllers.CentroSaludController; import
 * com.sanidadgobcan.tfguc.models.CentroSaludModel;
 * 
 * @WebMvcTest(CentroSaludController.class) public class
 * CentroSaludControllerTest {
 * 
 * @Autowired private MockMvc mock;
 * 
 * @MockBean private CentroSaludController centroSaludController;
 * 
 * @Autowired private ObjectMapper mapper;
 * 
 * @Test public void buscarPorIDTest() throws Exception{ CentroSaludModel cs=new
 * CentroSaludModel(); cs.setCentroSaludId((long) 1);
 * cs.setDireccion("Direccion test"); cs.setHoraApertura("09:00");
 * cs.setHoraCierre("17:00"); cs.setNombre("CS test"); cs.setTelefono("test");
 * 
 * ResponseEntity<CentroSaludModel> csRE = new ResponseEntity<>(cs,
 * HttpStatus.OK);
 * 
 * when(centroSaludController.buscaCSPorID((long) 1)).thenReturn(csRE); var
 * verUrgencias = mock.perform(get("/centroSalud/1").accept(MimeTypeUtils.
 * APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn(); var test=
 * mapper.readValue(verUrgencias.getResponse().getContentAsString(),
 * CentroSaludModel.class); assert
 * test.getCentroSaludId().equals(cs.getCentroSaludId()); assert
 * test.getDireccion().equals(cs.getDireccion()); assert
 * test.getHoraApertura().equals(cs.getHoraApertura()); assert
 * test.getHoraCierre().equals(cs.getHoraCierre()); assert
 * test.getNombre().equals(cs.getNombre()); assert
 * test.getTelefono().equals(cs.getTelefono()); } }
 */