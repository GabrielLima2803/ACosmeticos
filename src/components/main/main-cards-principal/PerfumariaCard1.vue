<script setup>
const perfumaria = [
  {
    id: 1,
    img: 'https://lh3.googleusercontent.com/pw/AIL4fc_B0jcVMe0KP10FgINXK9ZQrgEQe1jxuqSbnPMJKfIT6twpJcnZaGj0MCuvdKUUjXNzyql8CamPT6MxGooMB3NG1UXFlCJ4gW3vjPtzWacWTaz5L2M5zlwScCCXQhz9JTX6VNS8_1MCsFc61MfCEslUfYfuHSFHhDlVJsIoYErRHzhgMS98xXGwGEpLr0lhptkXfi1YbRDiOd5VYAGMrBSplRA6xrNCvF86cAj2I6cdP4dJTvFuD2sOeUwy3EvfFn2LIof3zQYV6e7fGP3Ul3pqMqS2b8k8Fk3fL43tekhgqo5O1bG1gMQdzjs4qE-rSrrp6nde0cljiT88aaoarQkOhLkferHzY9lg0TTMQMkapc_EsVxrsiqdiy4dhV2-Yc7fXfanekojPkXaHSxDY70soqJuNxY4pR0ys0K1CJ1okrYJVUYoofS8M7PN6KhUY1TNEZHsc0fJ5Ks66p9V3Dt820ZmltxzzBzwhyCLRJodqeXpPI6NTBCqcxZHKklwsxLylhTlIVaf2c8wu4LJklNAIou7kz9I9yKWzHVYIxYp2a7IukvjL1d_iJ0huibzPVYy-H3Kpp4EfzC47Eg3whLx8ICKeFQwiW0dEaGQkQxsgXZYulwwA2WVxw-INDSjnmn8nq0xhBWIBjlUaTnV1vj4FxinY1R_XEqG_CWlndPOesM4J2t6QHV4s0SVffNdfNDXp_XVSMh6sbS2v74WU62DYictxywPmsO2XpegQVj-xsi1TBmqxVSNQJlbzxAy82BLqm51k3wJLuziVfmf4RTkYIZnFpIg8FY6Fh1sZ-zsWXbqUz7bCj9YXWiLp1S2A7ASH7E9gnfoUmlzbMbyVRwJupq3tD_PMifWeyKYgPf3yL6D6suwH4F6UxczPKSjJ0kfwQ7FW9Grj4tnPgbgefs=w640-h681-s-no?authuser=0',
    hover:'https://lh3.googleusercontent.com/pw/AIL4fc-rzM_oKqMk5z7hOkknCbWdpnGACNJijgVIYSI1h1DJfYTasDrFWAA0Rpezp7ZvuLk4s6T6anJ3UpOqwt2FUSEn5Ah7WX6BxX98dbypwTJgi2q0tTHvHuOEP1gLKw8QgSJ1tafj-a6qG33a0B9JR1N28NAH2cO-o96ItqsoznF9Jf9zBp1Cc3WLUuTgknk0YECNMfTOtijAXTuGeP9JuXqFutTc5-xAG7abrUZs-ejUOerUPPwhpZP0u-gHzA4E_V-cV5zNF-RIAwnIHII_ZSnNMpm-R2RGEoN_WqRZPx2vF2FgiQV6mHgEnEc2cvW9AE1DWs9fFR6AsKAi11YmfQ3S9m5GaGS_dPozKm7m7pwZtVo4cQVgzJLoYLdTMzU_iaKO8YaZYclND9q04tnXU9WzdRRA1-NnvN34Ea9s6l56zLguVISP_bzFObUNVcD3EeGbABquLc41d_dgvAhpHzIRbOrsFRr-p-ydVjFWYSixg_PCevu-Q4DzMsqRz-HQiopQZgvuklrq_MH-r1Glnvdwph_xD1UShRXxGCe4WUx7s6r9gell4o8Nr5o6rlbFDzEkwRSZPb-N1ENMY64NnNhEGxp6aN7ks88405agCs0ZwEv3kZQntaauam6FKaph1QHoZn35t6QzrxgH7KIEVIfQwl7TqVP1IFUHjnc7ct2h5JOvxOUgs1Wlr6AQsCrQKly2msPwP2tIpxWJXH2Yt3oI3Gt8O8yTg46T7k-193_ehSV5al5JvilxVT2TAF79PROoqljfu4ei5nVT6ay7JvDNeee1HueKRnBLsUYFoMMyk3Ka39V0CB45vNPVnvQ0J1SEGEDBTauJ1YAAqWUxeZp84evIT1tfMfvGLly6x_EBw0w3S1JioPYnyv7bNSJLDe3zIZi88wC7rf79MZLAKOo=w1311-h546-s-no?authuser=0'
  },
  {
    id: 1,
    img: '',
    hover:'', 
    original: ''
  },
  {
    id: 1,
    img: '',
    hover:'', 
    original: ''
  },
  {
    id: 1,
    img: '',
    hover:'', 
    original: ''
  },
  {
    id: 1,
    img: '',
    hover:'', 
    original: ''
  },



]
</script>

<template>
    <div v-for="(produtos) in perfumaria" :key="produtos.id" class="col-3">
        <img
          :src="produtos.img"
          :hover="produtos.hover"
          @mouseover="produtos.img = produtos.hover"
          @mouseleave="produtos.img = produtos.original"
          class="img"
        />
        </div>
</template>

<style scoped>

img{
    width: 320px;
}





</style>