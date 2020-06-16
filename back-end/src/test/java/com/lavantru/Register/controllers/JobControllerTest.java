package com.lavantru.Register.controllers;

import com.lavantru.Register.utilities.TestHelper;
import com.lavantru.Register.model.Job;
import com.lavantru.Register.services.JobService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(JobController.class)
public class JobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JobService jobService;

    private UUID id = new UUID(1234567890, 987654321);
    private String jobMocked = "Laundry";
    private Job job = new Job(id, jobMocked);
    private String jobApiURL = "http://localhost:8080/api/job/";

    @Test
    public void getAllJobsTest() throws Exception {
        List<Job> allJobs = Arrays.asList(job);

        given(jobService.getAllJobs()).willReturn(allJobs);

        mockMvc.perform(get(jobApiURL)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    @Test
    public void getJobByIdTest() throws Exception
    {
        Optional<Job> job = Optional.of(this.job);

        given(jobService.getJobById(id)).willReturn(job);

        mockMvc.perform(MockMvcRequestBuilders
                .get(jobApiURL +"{id}", id)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.job").value(jobMocked));
    }

    @Test
    public void addJobTest() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders
                .post(jobApiURL)
                .content(TestHelper.asJsonString(job))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void updateJobByIdTest() throws Exception
    {
        MockHttpServletRequestBuilder builder =
                MockMvcRequestBuilders.put(jobApiURL + "{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .content((TestHelper.asJsonString(job)));

        mockMvc.perform(builder)
                .andExpect(status().isOk());
    }

    @Test
    public void deleteJobByIdTest() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders
                .delete(jobApiURL +"{id}", id))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
    }

}