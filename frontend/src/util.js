export const withConfig = f => (
    fetch("/config.json")
        .then(response => response.json())
        .then(f)
)
