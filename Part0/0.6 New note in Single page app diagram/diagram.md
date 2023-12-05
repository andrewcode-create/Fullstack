sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: correctly made note
    deactivate server

    Note right of browser: The browser sends the note to the server and dynamicly updates itself instead of reloading