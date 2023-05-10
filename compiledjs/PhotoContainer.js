"use strict";
class PhotoContainer {
    constructor() {
        this.container = document.getElementById('container');
    }
    getContainer() {
        if (!this.container) {
            console.error("There is no element with id container");
        }
        return container;
    }
    emptyContainer() {
        this.container.innerHTML = " ";
    }
    showLoading() {
        this.container.innerHTML = "Loading " + `<img width="15" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAJQAlAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQGBQMC/9oACAEBAAAAAKYAAJgAAEwAACYAABMAAAmAAATAAAJgAAEwL/cBxa/Xsq+fQL3ZWlVzO191YtZBAGwnHOl36GdevmgDYTjl7R/HE5sJgDYTjk6G+r8GpMAbCccTf7Nj5y3lAGwnHBOlt8DnQBsJxzoW6Lu++cpQBsJxzoaEc/PoA6jlps2FeqkAAB//xAAZAQEBAQEBAQAAAAAAAAAAAAAABAMCAQX/2gAKAgIQAxAAAAD6PzAAAAAAAAAAAAAAlry2Ncufee9595wJ6XuuEV10HXjwCel7RLNVhvVJtiBPS93n56y247riAx3NcpaiibvgAAA//8QAMRAAAgECAQoFAwUBAAAAAAAAAQIDAAQFEBEUIDAxMlFTcRIhIpGSQUNiFTRAcIKx/9oACAEBAAE/AP6cw1Ee4IdQR4DWj2/Rj+IrR7fox/EVo9v0Y/iK0e36MfxFaPb9GP4itHt+jH8RWJoiToEUL6BVvay3J9A8hvY1HhkC8edzQtbYboE9qNrbH7Ke1Phts/CClHyJGth8scU5Z2CjwEVptp1xWm2nXGXTbTritNtOuKuyl3dxLE4IKgVGixoqIMwGR721Q5jL7AmlvrRvve4IpWVgCrAjmDR3nvsDS8I7DUwsA3JPJDkxJ3S29P1YA5YppYW8UblTsTS8I7DUw6QJdJyYFcjosiMjgEGrjDZEzmL1rW4kHZGl4R2GrZ3qTKEcgSf9yz2sM49a+f0Yb6ubSS3PNPo2xNLwjsNaDEZoswf1rUF1DPwN58jvyMqupVgCCMxFTxGCZ4+R2BpeEdhrglSCCQRVlO08AZuIEg5MUGa57oNgaXhHYamGgG5IPTap8MViTC3h/E01hdr9vP2NJh9054Avc1bwLbxBB3JyYg4e6f8AEBdgaXhHYamGfuv8HVvL5IQUjIMh9l2QxWfpx1+qz9OPUS9uo90p7HzoYpcckNHFLjkgqS8uZRmaU5uQ8v4//8QAJxEAAgEDBAEDBQEAAAAAAAAAAQIAAxESBDFBQiAhIjIQMFBxgZH/2gAIAQIBAT8A/FVQ2fpeHMb3gyO15SyDXN7Wj1WbY2EtU390osxyufHUdZp+0qfBv1FNmBisrbHy1HWaft9Ho8r/AJPcp5BlKpn6Hfx1HWaftGOIJgqIeZWZCByZQ+f88aqM+NpSRkyvGGSkQ0H4tBQfm0RAg+5//8QAJxEAAQMCBQMFAQAAAAAAAAAAAgABEQMSBCAxQUIhMoEQIjBQcZH/2gAIAQMBAT8A+qouFnWE1j6QnsbWFVtcYGJlBREdWl1NPSRVcRa2Gy4fksRw8qn3j+omkXZkQkL9WUvlw/JYjh6BX2L+r2k2zsqtOzq2mXD8liOHlC1xMyKkY7KgJs7y0Mq/Z5y0TEJlVjE7YQvaTOmrhvKeuG0ozc3l/k//2Q==" alt="typescript_logo"/>`;
    }
}
