package com.careerconnect.backend.ats.analyze.controller;

import com.careerconnect.backend.ats.analyze.dto.ATSRequest;
import com.careerconnect.backend.ats.analyze.dto.ATSResponse;
import com.careerconnect.backend.ats.analyze.service.ATSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ats")
@CrossOrigin(origins = "*") // allow frontend access
public class ATSController {

    @Autowired
    private ATSService atsService;

    @PostMapping("/analyze")
    public ATSResponse analyzeResume(@RequestBody ATSRequest request) {
        int score = atsService.calculateScore(request.getResumeText(), request.getJobDescText());
        return new ATSResponse(score, atsService.getDefaultSuggestions());
    }
}
