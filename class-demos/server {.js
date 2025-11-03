server {
    listen 80;
    listen [::]:80;

    server_name bryanbriones.xyz www.bryanbriones.xyz;
    
    location / {
        proxy_pass http://localhost:80/;
        include proxy_params;
    }
    location /project3/ {
        proxy_pass http://localhost:6001/;
        include proxy_params;
    }
}