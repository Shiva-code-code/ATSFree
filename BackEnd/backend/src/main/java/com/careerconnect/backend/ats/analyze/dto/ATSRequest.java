package com.careerconnect.backend.ats.analyze.dto;

public class ATSRequest {
    private String resumeText;
    private String jobDescText;

    public String getResumeText() {
        return resumeText;
    }

    public void setResumeText(String resumeText) {
        this.resumeText = resumeText;
    }

    public String getJobDescText() {
        return jobDescText;
    }

    public void setJobDescText(String jobDescText) {
        this.jobDescText = jobDescText;
    }
}
