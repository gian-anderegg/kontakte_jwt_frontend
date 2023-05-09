sendForm() {
      if (this.$route.params.kid) {
        axios(
            {
              method: "put",
              url: "/api/kontakt/" + this.$route.params.kid + "/",
            }
        ).then(response => {
          this.kontakt = response.data;
          console.log(this.kontakt);
          this.clearValues();
        })
            .catch(error => {
              console.log(error);
            })
      } else {
        axios(
            {
              method: "POST",
              url: "/api/kontakt/",
              data: this.kontakt
            }
        ).then(response => {
          this.data = response.data;
          console.log(this.data);
        })
            .catch(error => {
              console.log(error);
            })
      }
    }