package com.careerconnect.backend.ats.analyze.dto;

import java.util.List;

public class ATSResponse {
    private int atsScore;
    private List<String> suggestions;

    public ATSResponse(int atsScore, List<String> suggestions) {
        this.atsScore = atsScore;
        this.suggestions = suggestions;
    }

    public int getAtsScore() {
        return atsScore;
    }

    public List<String> getSuggestions() {
        return suggestions;
    }
}
