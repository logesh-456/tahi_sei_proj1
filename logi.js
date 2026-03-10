<script>
       
        const loginBtn = document.getElementById('loginBtn');
        const reminderSection = document.getElementById('reminder-section');

        
        loginBtn.addEventListener('mouseenter', () => {
            reminderSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Also allow clicking for mobile users who cannot "hover"
        loginBtn.addEventListener('click', () => {
            reminderSection.scrollIntoView({ behavior: 'smooth' });
        });

       
        const medCheck = document.getElementById('medCheck');
        const medMessage = document.getElementById('medMessage');

      

        

       
        function findMyLocation() {
            const mapFrame = document.getElementById('mapFrame');
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    
                    const bbox = `${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}`;
                    const newUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
                    
                    mapFrame.src = newUrl;
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
    </script>
