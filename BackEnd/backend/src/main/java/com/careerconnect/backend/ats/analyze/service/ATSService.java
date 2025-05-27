package com.careerconnect.backend.ats.analyze.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ATSService {

    public int calculateScore(String resumeText, String jobDescText) {
        Set<String> jobWords = new HashSet<>(Arrays.asList(jobDescText.toLowerCase().split("\\W+")));
        Set<String> resumeWords = new HashSet<>(Arrays.asList(resumeText.toLowerCase().split("\\W+")));

        long matchCount = jobWords.stream()
                .filter(word -> word.length() > 4)
                .filter(resumeWords::contains)
                .count();

        long keywordCount = jobWords.stream().filter(w -> w.length() > 4).count();

        return keywordCount == 0 ? 0 : (int) ((matchCount * 100.0) / keywordCount);
    }

    public List<String> getDefaultSuggestions() {
        return Arrays.asList(
                "Add more job-specific keywords from the description.",
                "Include quantifiable metrics (e.g. 'Reduced cost by 20%').",
                "Tailor your summary to the job role."
        );
    }
}
