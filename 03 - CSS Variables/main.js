
document.addEventListener('DOMContentLoaded', () => {

    const inputs = document.querySelectorAll('.controls input')

    function handleChange(e) {

        const suffix = e.target.dataset.sizing || "";
        console.log(suffix)

        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
    }

    inputs.forEach(input => {
        input.addEventListener('change', handleChange)
        input.addEventListener('mouseover', handleChange)
    })
})