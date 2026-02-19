package com.peryfeerie.strona;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "http://localhost:3000")
public class StronaController {

    @GetMapping("/api/ping")
    public String ping() {
        return "Fundacja Peryfeerie API Online";
    }
}
