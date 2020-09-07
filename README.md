# Goatstone Server

Node
PM2
NGINX
openssl
git

sudo python3.6 -m pip install certbot-nginx

sudo certbot --nginx -d goatstone.biz

selection
1: No redirect - Make no further changes to the webserver configuration.

 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/goatstone.biz/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/goatstone.biz/privkey.pem
   Your cert will expire on 2020-12-06. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"


https://www.codementor.io/@marcoscasagrande/installing-express-nginx-app-on-ubuntu-18-04-with-ssl-using-certbot-pdt44g5gs

https://www.techtrekking.com/how-to-resolve-error-the-requested-nginx-plugin-does-not-appear-to-be-installed/