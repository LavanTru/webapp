package com.lavantru.Register;

import com.lavantru.Register.controllers.LndryJobController;
import com.lavantru.Register.model.LndryJob;
import com.lavantru.Register.services.LndryJobService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;


@RunWith(SpringRunner.class)
@WebMvcTest(LndryJobController.class)
public class LndryJobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LndryJobService lndryJobService;

    @Test
    public void getAllJobs() throws Exception {
        UUID id = new UUID(4, 1);
        LndryJob lndryJob = new LndryJob(id, "Laundry");
        List<LndryJob> allLndryJobs = Arrays.asList(lndryJob);

        given(lndryJobService.getAllJobs()).willReturn(allLndryJobs);

        mockMvc.perform(get("http://localhost:8080/api/laundryJob/")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    @Test
    public void getJobById() throws Exception
    {
        UUID id = new UUID(1234,64);
        LndryJob lndryJob = new LndryJob(id, "Laundry");
        Optional<LndryJob> op = Optional.of(lndryJob);

        given(lndryJobService.getJobById(id)).willReturn(op);

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:8080/api/laundryJob/{id}", id)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.job").value("Laundry"));
    }
}