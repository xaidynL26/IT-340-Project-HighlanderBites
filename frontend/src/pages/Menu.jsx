import { useCart } from "../context/CartContext";
import "./Menu.css";

export default function Menu() {
  const { add } = useCart();
  const menu = {

    breakfast: [
      {
        id: 1,
        name: "Pork Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://static01.nyt.com/images/2024/04/24/multimedia/as-sausage-egg-and-cheeserex-vlcw/as-sausage-egg-and-cheeserex-vlcw-mediumSquareAt3X.jpg"

      },
      {
        id: 2,
        name: "Beef Sausage Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.50,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFhUXFRUXFRgWGBUVFxYYFRUXGBUWFRUYHSggGB0lHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUrLS0vNS0vKy8vLTAtLS0tLy8tMDAtLS4tLS0tLy0rLS0tLS0tLS0tLS0uLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABFEAACAQIEAwUFBAcGBAcAAAABAhEAAwQSITEFQVEGEyJhgTJxkaGxBxRCUhUjQ2LB0fAzU3KSouEWVIKyFyREZHPS8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAzEQACAgECAwUGBgIDAAAAAAAAAQIRAwQhEjFBBRMUUWEiMnGh0fBCUoGRseHB8RUzYv/aAAwDAQACEQMRAD8A9NuOANTVHxHtRYsnK7qD051h+2XbZoFq2SDrmPTyFYc3yxzEkk8zrNYp6h17J3dB2RHL7WV16I90wPafD3dFuKfWrVrgZSQZr5+sEzpM8o3rR8P7SYnDCGl08zqPWlDUNr2jRq+wOFcWGV+jKTtZdY426pBkN8tKuuH4hVC6QdKynaXjme/3yrBIgzzoKxxtidTFZM+llliq5GfUZpOKxvoj0bi+IueEoJHOqC3rezbGoeHdrDGQifOhsVjS7yNKw4tPPHcWq9THCGSbqKZv1vqVUltVg/Cm8S4411BbtzM61kba3CNCdqk4XijbaWNKGOeNPfmT1EMsYriRBjOJ37LwdJ9+tct8bughlYqR0Mg+8U3tG7X3BAiKqrQZdGFa4Qjwprmd3s3JglUWldHs3Y3tEL6AMfENCK1LV4Z2bxrW76FTAJAPmK9rwdzMgNdHT5HKNM5HbWhjp8vFDlIc5qKpHqFqvOMiRakWorVTChAydKIt0OlTpUkIPt7VMtQWTUy1JAPpl0aU+uMKYFea4TT7g1qFzUQGqJNSGmrpSpIBTXaUV2mB8+dr7ad2GXcxWesmBrRnHbjELOwNAB65GCLWNJnq+z3wxuw2zcykGtrbFt7MyDIrA27mlG2eJZUgf16Vckqo6s5caTTBuLYQSY9KzT2iGir3F4zTeqW3dl6vwcSTOH2r3M8ka5lthUCjzokPQRepLbVVJXuzoYciguGJpuDYhiDOoqyv8PzLmHrWQs4grsYq3wXFHG7EjpWHNjn0NixQzbMl4lea3EDQb0LxLGK1sEb6VcY1ldY5msxxNxbQoQfKo6dKVbbnG1ehejzLLD3f4O4TFGQQYINep9me04CqtxhqN/4V4vhL2tXmExOoJNb5Jwlsb491rsPDk5nuqcSRtiKlzg7V4/gOLMWhcx92tejdlhdceMEdJq/Hkctmed1/Z/hns7Rf2qnAphtwalUVcjmMlQVMlQrUq1JCDbBqdaFsNRANMCUV00wNXakAJitKFBmjcWkihFWKiwOxTgK4K7QAqVKlQB4dx3sdfykJBrKXuzmKXdJr6AcA0Pcw6nlWaOFRVI149Zkhsj5+/RuIXe031oa9Yuj9m/8AlNfQb4JPyj4VC3D7f5R8KlwF/wDyU2qPnDEW7p/A/wDlNRWLDg+w3+U19Ifom0fwCujg9n8g+FWKW1UY5ZG58TZ4Jbw1w/gb4GiFwF7+7b4V7wvCrX5B8KenDbY/CKpcGb49otdDwlOH3j+zb4UbY4Vf/umr29OHp+UUTbwa9BUXhbL4dsyg7UTyHhXBcQzCUIHnU3HexGJvEZAPWvXlsooJMADUmo8PxW0yM9tg4WZy6nTeBzqtYYYnxthqO2M+pjwUjyHh/wBk1/d7oA8hWr4b9mllI7xi3v2rUi87sWDkIR7JGoPl0qa1aZFJE3ARqCdvMVil2hxu4xtef9IrgskFXHXwBcNwPC4cCEHoKvsO9tNIiqzAYe22zhjlnmI12IPOjhaDlToYU665WB2owarO03JJeXUpywi3u2/iNxWI8cZT7+VQ3saiNlY6xPlTu7GhRpSSHBIMHmJrv3JSZylo0k/KKlHV590Q7nEOXHJMTykHl8amXEr1oHF4bMrKrBgV9kjaelZPtHxDEYSyty0qsqeFl1ze+py1mRbKrCOmhI9AtYteoobFcdUMLaa3DqF8uvurzrgXacY28LbjuiIZQ2nvg1pr9lbdw3c8kgDQ8h0olrsiW6ofhYp0WS9qSufvLbArGkTPmOtHWe0QcgIPjofhWKxfaTPcW2FELqTzIFV2I4vi2vh7SL3YHr7waxeOz21GXrvXLyNPhIVckerffZG2tC2uI232PONeorG3HxZgpcCru+hY+4chVpw17jL+uVRqco3noa0PtLIqbVfEz+EjXM0012qO099gQptr/imQOcCjbGZYL/WtWPXOdey68yiem4eofSob72POlVnjsRDw8yuYVC4qZqiNaigiYUwipWqNqTJIaKcK5ThSAcDXQ1cFPFMB6vUqvUIpt+7lE0pSUYtsaVukVPGcb31p7JRlJJUk6AAdddQdPjVUvFXXW3hjnAyObagKoAG0xnEE/A86Ne4LxaSSZkAbHXT0ou6AFgD+utefnnlkuUuR2I44wSS5lZxJLtoqbEwyybTE9SSTJhdTVhwVAUOKuIy3TCqJ1ADQM0Eg6ydtjUmHt6zpJ5t06Cdp0qvclcU9y73dlQkMcxdroEhGCbW4g68/Ss0MclG/Tr0+r8ti2WRP2ftltj+LoAWuMyZGX9ZkiMx9nMRBmAKmt8Sts63QzC3kcHwuCGVhpG3JuXLzqjv4AYoNd7641rKAqfs2XOrGVPtZsoGo0ExFAcRY4W3atWENxmZ5OV1trmBOynQSRod+oq6DfCmnb/8ARTwK6a/Y3nDMfZuki0AcwzEjUEbBjGgNEpeKvLeyRoQZWa854JibljEOUV7aXLawACEBBOYZeROaZge81qMDiGXOG8WYyNScvhC+BSYG0++an4lqk3vz9PhRCWDnX9lz34FwrAhgYPOeYqnxGBuOjDLzlQY115k0Nw26+FYhe9vaATcYZugIkxoNSdCfOiXulwzuA5APhMlSJB9mYJEaGh6hSXDL15AsTi7XpzBV4GrlibS5go2UlgwnTTajMPw8MpBUjKpiIEmNBrvVbhMS+IYBGa2SqOGtk53WSCDbZfDpl13k+Wp17AEgtauMt54zPcz3F000TPAMT09apjFzpyvbam9n8WTbq6/0cXhK4h0uXrD2jkVWTw+ILIUhkP08qLwuBwyvlUSPZicwGUwdI3oLA8TumyLl0XFKsygIhLPkJAfIVlc2WddNRrQHDe0Lk3bhw4a07ju7lsQ48YV7dxCQVZWzTGmh9dbbVuMf1dOyl29mzQYDjFvJ7JtgSMuUtGUx4oJj1oa7dJcXrbTKwiEgWzqZI00bWNTWU4/xlLa2b1hMwe8BdMkSsmdDqZb3c6vjxl7bIluxFowzPEjUwQAGmY16VknkyTSlkaVcvPb+PkaFiivdT/XkWtrHlWyYnKhcHu5ylQQNcxHpReBuGCqBWUHxZdjOuZdZGvKqC5xawGuKSl1Tm/V6SsIpdMp3IBzf9dVfAbyYoX7dmw9lCqmxcBhkaNC8GRDD2djsedaMeRpLe/3b35b9d/QrljtPb6f0brOnU/Cu1V/dcT/ff6VpU/E5fyfJEO5j+b5v6El7Q1FNE3xNBmu+2czmdJqNqcTTGqIUcroptIUASg08GoQacKAJ1NBcZs95adAA2ZGGVtFaRsx5CiVNMvbqeWo8vWqtR/1stw++iiwHDUt3O+KxcKJbiZVQDJCevPyFSYzHlrotWVUqj5bzNIJ0mE08wfWiriFi+aQNgZjQjWCNjrQzcOXKCyqUs5SjOxZ8wBBOo3AO5Os1xo27v7R0pbFmkcjt61Qcd4h3TE5Gd7sJoBqFBIDk6KNTB6nzo3h+GC3brC0qByjFwxJuHKASyx4SNvOKPOFVoB56U8mPiarkRhKuYJwLitm6uc23Ats1t2bwrnkKY18XvjSamtXLZuF0uZg4GUF9CFLaokwDvJG8eVB8a4eDhmsgSA0hVUSSWJJb94Ekz1FZLh/Z+9b/AF7FWZdQdWImZIY6zqdo3o9mMavkCTk7PQcRftgBn21mBJAHOqy1jytpgpDWSe8S8cxuZWlyuUrMjVQOgAqi4dxEvg8TbDXDiEL93eaCH0DKcw3A1UiDtFaDsxjhisNbUkZ8pYnKVBIMbEAiZmpvEqaXUjx09+gf97W5g+8ViJAMkQwkQNDqCJmDVd2e4YWY3u8zNkW27kgZikmSANzOvLah+IYhrVkOwDBj4VtKSxUkbqegMkiq/E8a7vLatPbti4xDFy2VSV0IUbmYkEjbeqZRuSvlX8blkfddc7Lm5xm9YuP4SbbL4Sil7gOwEbGSfTnTuH42/adEuW3u2xlUuqlnBMy9wABQvs6jrtRL4jLbUKwfQS0dNoonEOTbQrcOYjUD3dB0pJ8PrX390J0+nMVvia3HxNl0KoEXurozCSQcw6ggjlyYUXhrSrZVbOnMnctI1Yn8x3J3mgcLhFFyyD44BEszAyV8TMBo2kjWp8dbi8toWhDgwf2asozKW15kCNOVXNylt05eRXUV/JkO0/CwyHuwboQojWVg+IlTuNQYIMTrPnVphzctmyqZzbIbMInUBcoI8hII32oMviMHZPekC7cJysAzpn1ZS+UTso9dOlW/C+LG4y3WtlW1DKVYBjoC6+RgR1mseRcMEnsrr+zYpvlzA+M8Ics1y1cklllSy2+70C+HpJH4p1qx4UzFZWwLLq+Uu6CXQOpYDIdj4oJOm8UXiODWbqX7hFtjdEsb6h0QLBUFdJRSM0TvzqxNp+7U22UjwliVzB05hYIgkbHataxOk4v7++Zmea1wtBP3den1pVRfpr/270qPF6f0+f0DuMv219SzJFA4lYMin94Kje4K7rOUQC5SmhcVcA1oe3xFdpqNjosZpTQwvg7Gu95RY6CQ1OzUILlOFyiwoKDUrreEz/RoO/jFtqXcwoEk9KocV21wWUqbk6bAHX3VGe8WkOG0ky8xjuAuRQ5LKGlgoCk+Jtd4GsU27lYRodR56jY1gMF25uXr2S3aOvhkmdOTEURjOPvYfYN1956VxMmPLFpcPzOrBwlyZtnukKTBMAmFGYnL0A3PlSsXO8thgTB8QnQgHkRyIrJcO7f2iwFzNaOu4lT6irC32hw8F+/tgO7HxMEjWPZaDvTlGSVSiyFq+ZZ4vHXlV0sWQ0JmDltGYkgiBJBGmvnU3A9mF46ELlHJYmdec6b13h3ErbeK26Pp+FgfpXMwzHbUkgDkKk400yNj7fD0Vf1QCgbAQI6iBypXrRGo8M8/qDXFuZdRT2ugjlB3Bp/EVlZbxTC9kZHIW34W0yDkQD12+FUuI4KL1/M+8gjn7iJrSqNY+Hu6U5okcjyqE4P8LoshkqwnCAIAhGwA+FLFXWT2ELksvhBAgFgGaT0EmOcVD3uvi9KIsPzp8PQg31CsqkAyQ248qNW7ME66R8OdAd6Dr6VPYaBTSV7EWGsV25VA1gamJMGBMSSNpoTGh2EWyobkWBKgTJkAg/OpL13KyqW0P8OXlRLfeSBejDlRxZyhVVynst41UsNmj2gD03o/DElQHAmBOXaY1y+VB99oJIPnXUvVojKK2RU02F/cl8vgKVQd4etKpXHyD2ioZahuJVocOKY2DromQzmLtTUHCezhvvLSF+taX9HSavcBhBbWIpxjfMGzJ4rsey/2VwjyOooC/wABxajwlW+Ir0QiuEVJwRG2eWHC40fsvnQWMx2ItGLlph8x8RXqeJxdtN4J6VUY7Erc3URUHFEk2eZcc4hce1kYMivpMb+VZLB9lWvXIBaJ8TRqo8jXsPaThy3sM06ZPGIGsrrFZ3sVdN/D5gMo7x56+ExqaxajJPDuuptwRjkVPoZy12ffDswwy5SR7TSXI56nShuLYtHGQtAEfhJMjetp2g4gyDLbMHbYfWKwdzKXAcTJrHDLxvnZt7qlyopcSUbwoh/xMdT6bCgjw1mMqpJ9a9N4fwnC92c1vUwZ1nfYHlVXxjilnDjLbTMZAIXl0DOduWlX+KcZcGNW/vmVPDGSuRh2wuIQhgpUrsyyCPUGalPHMcNO+vepJ+e9WmJxuJY/2SiTtJJ+NQ3bd0/gWf8AF/tWhZW17aj8iruY/hsr17SYwad9cj309e12MBkXm9cp+oqXEWbqjW2I6if4jWg1STrbPnAmI32q1d29+FfIhLG11Zb4Ht1jVYMxRwNwVAkcxKxFaXDfaJZc/rVdCNtJH+mT8qx2GxVoaG2cs7+Kf5fKi7ODtXpCkDSddCeoGlZ80Mcvei18BqMkvZf7mkt/aWpYg4Zik+E5xnI6lSP41Ie3tgjwi6pMgyAcvQ6MflWft8FXT2h7oog9ms4/Vss+dUznp3s9iChqE/MvOzXaWxhlYXcTculmJE27pgRtMGa0mD7dYVpMui7eNSNuemkVgrXDbtogFWWB7S7fEfxq4s4cMgtXM5fNKZTqZEEGN/dVE3C7i3+lfQTnlv2l/JsrHavDsjMjM0Tsp1PTUVSL2juOcz2nWCYAAMCREkHU71iSjWWYcgyyNQdCY93+9W+A4hZUAAOJOjTLSSNGkkNtExzNGWPVFPfzj0Nfhe2JW4JtXCIiMv0MxNWWM7ULOYWrgmMohQSY29qKxt3tRbW4QVJQEgFInQnUjah8Z2qm4LdkG6DBzQVK+TSIn/CTTjGfDty5kVlyN8jXf8TX/wDlj/nX+VKqv77if+XHxalVPHL7YceU9MNsdaYR50I+JNNwbM7gcudegIlzgrPM0bUamNKG4hj1tLJ35DrVmyRHmT4nErbEsYFZziHHWYwmg+Zqt4hjGuHMx9w5CgDdqqU7JKJYLdnU05wGEE1XC7Uq36jZKhnHsHcfDXbdp2zFTlHU8h61XdieHXcPw9EvArcZrjMvMZmMT6VdJdpuNxGnkBXK7Wz8ONQjzkbdFC5W+SKfHYNW1NZ/HcKtTLbAyeWnvoLtjiuIoTkCpbJhe78bnpJI38hWDxSX83/mBdPOXzGDymdqz6PQZGreRL0W7NmXVxTpKzYdo+2Sovd4chmiJGqqPf8AiNVHD791bQKrn7xp11yzuxPPX6Vkyh6H4Vd8GxxVVtkNuYMaAHkCfSuu9LHFj9nfzvqYY6mU509l0LrCd+11gzCAjP0jlMHnWgbBC4Ac0OCGUxofevr1rK4HiJZblyYiARvI3n3aVI3aVVC5Bm8uY9ayZcOSUvZXI148kUrbNFjy6qcOYYiDmG0AQYJ16VQ2sK9h82XNmOm23Q9T9K7gu0SvdklgY1zRy0ABFSYriwdhlkAHXznQ6Tpv8qIwyQfDQOprisLXh6uCxABbUDXQ7j3UXiuDoUEt49P1iwGgaGQd+VVeIxU3VW2FyEgOec+RnSrXG8SW3bbMZTKNDMjxaAMNYkL5VW1ktU+ZP2Ut1yIOKWbuGIYAtayggsRM89vOoLeKuqO9yeAiZBMjy8zrtXMHxG7czi5H4O7EA+EzIhtAMuvX41Z4Li1uwzIYhlgqTKQZBA66xTlCtmrfWiuM+vQhwPaG+wOQTGkHQ+ulduccvrq2EWAC2vhbTU6QfhSw1hxdAtIzIczZoYhdRC7anXr9Jqx4vxu1lUMQWMrOgiY8YjmRyNVd1jUvc/ktu1swfhOLwuIYLcDI7bjLMgjcECDvzjeK0+I7HKFQ22BtDXYHXrB58oqowOFsi/aW1orIMxHMnRh0MxPoOlWOD7TLhL5wt95U6JcY7g6ZbvQ8s3x61Rmi1fdX9Pguvw5i4LptKxJ2QE6AEnfwJz9KtrXZ0oACAVHkqgRttWgwWKXQ+6dtfMH4VYOykeX18qywTzQd5NxSyODrhK37rd/P9KVT98fyiuVDvI/mn+7FcvJfIbesDrR3C8PlE9aA1Zgs1cDQAV7JHFY93rJ8SvG7ck7DatFebQ+6qBrXiI9ajMcSDF2JWRyqnJgwfSrskofL5GmXrNpxJEHyqtoaZVCpUWm3HQGBJp64lRUbROgq2mmtOfAoyd2sgEcyTHUyTQBxRJgUdZxR9k7xE1k1SUkrRfh4ovmO4hgLXgkKckZc2sGIkE7HU0Naw1m4IULI0I0NZ/tlhcTFlrNwmbgW4BzB2J/rnUOK7NwjXJZSBJIJmB0rj6jTd5U/dfpv8jbjdbWaS5wK2w2A9wquxfZDDuuVxI5a5T8RWb/TV/DhUh7wYwp1020ZtufOrDD9pWgi5adTyI1HqNxWXw2qx7xl8PvmXNJ7MrsZ9mCGe5vsgO6nxj4yKBvfZY0HLfM+awPka2NrioO5jqJE+6PT5URa4nacaOpB3Egz1q5a/XQ/F8kVPT430PK8Z2AxKyVIaI2OvpQgwt2yCt61cnTUAnTp/wDte22cSoA291Sm3afRkBmrV25l5ZI2v2ZFaaMXcTw9OJKjwJ/ezLB+FF4TFWzcDM0rrodSPTY71v8AtZ9n9vFhWsXO7dZjMAQZjQsPEAI03iaznYnsYe8u2sYhlWgA6jaQynmD1HSuhDXaXJic1Ldc11K7mpU1sZzE8RVbmbNmBn2ZnTYmliHF5c0yzDQDoDIBA8wNK2HaD7N7aS+HJIj2JmPJZEH1rMYfs1i70hUybRmXJsdNOVXwz6eS4oySrnug4ZtbrY1HCOMzZa2fCQrFSfDJA2nz29Kx33yxduPc7s+yIzMTJB1JGnLpWnwPYPFOCLt9U8GVYkkE6t852OvltTD9k7gaYkeoyg1RDV6PG2u839LLJylJpqIBwa7agM+ZYkyrb6GFE7a1YX79jEPlugEjRGLaRlACnedhtzJqA/ZpjMwttctm3uCCxj3gCDVtgfs9uowY4hIGhAtw2XyYtvUcmq0sXfeK/wBfoNTm9uEH7Kdorlq+cMoe7aBiACWtid1PNRMQdP4+pYfEhfa08/5zVX2f7P2sP4bawW3YzmM9W3NXN/gdu7pebMoIIA018wP4muRkT1ObvMMaXVut/WibyJKpsH/S6fmX5/ypUZ+hMP8A3KfBa7WnwWT8xV32PyZNw5N3PpRTNSiBFQ3Hk16rkcfmcuGgcRb1+ho5TUd9ZFJkiuurpqJ8v41X3Vy6jb+t6tWWNtRUL21bbQ9DUGhplNfUN5HrQYwjCrTE4QrrFQrVTRYpVyFh7YWmYhTmzqdIIK+fIzT7hgVXW71ws4ZQFEZCCSTprmEafOq5pNUyUbTssMLd6tmE865exJzi0NM1tiHjMoIIEMPUHz1qkOOa03iErz8qtcNjkbVWBMaAEa+tYHBw2ZpUlIMTh6BGAAgkMfLYadNqqL+CdLxfxPabKMmWckTmbOZJmRv0oR+0Ywy5sS7FLlxgv6vIUXNAVhzjrz3q5s8WR27sONgRHMHUEHmCKrnGv9E4tsjvcDtMSwG9A3+z1vkB5j+NXzYhRpIHSTTrwBy+7WoyguhJZJIy4wZsg5WgEiAZIBHMdDVthcQwHiE+6u4zgwuMLhJhfwA7nef9qKCSnhjbT+E1nyaVT5lne7CsY6IkR76ceO2CzLIZ0A8IjMc06L1216aUDZwN5kUXXXOPaKAhTqdgdtIpuE4CqXWubz/W1ZHoI8Tu/v8AwTWSLVsHxnFL/eM1uycpiFZhuBEiDpQT8axG/dFT5Q1aX7tXbNkanroKu7mK24V8yPGiXDcQtuBqCYEjnPu3ofil+8qr93TN4iHDaQAAZExP+1P4Rwruw2ZmeXZpYzlBOir0A5UatuSelUR0KjK+fxF3iArNrETrEQNdN+fOBVhhrNwnxyYjzHoTv8KJwq5dPL0oxDV+PRJ7vYjLMdtoTEgUSFqJXoPG8VVPCJZvyrqfXpXTxQSM0mWXeeVKqD9J3/7j/V/tSrRT8ivYu7hqAkdafeB51CFrqMxocDNdNdQUzOKQyC9odKheDvRF1wd6Au3oNJjH5WHsmR0NQ3Mp9tCp6rUysDT81RoaYF92U+y49zaULfwL8lJHlr9Ksmtqdx8KiFiNmIqEsdk1KijxGEnRh8RWf4hwXxZ7ZKsNiPOt7+sGzyPOonDHe3bb0FVvES4zz7iOPcWgl6z3o0zAgEGPxa1UL2jsLdVzbupAUaeyoWQAE6QeXQV6ddwtth48P/lJ/gaqcV2ewb+0l5fdBHzFV+Hj1JrK+hUjGWMcmaZy6SrAMNOm/wAquMNxi2Blzbaa76VTYrsFgn1F5l6Zrc/MEUBd+zVNkxdv3HMv0mqnpV0b+/1J9+6po3WHvd5orDaR+97q7axKFNobl/vWGTsbxG2ALOMtkKZUd5sf+pZHxqduC8XH4bLeYdf4vVUtLPo7Gsq6m2t4kVKbw6154eHcaH7JfTxfR6b3fGV/Yf6H/gaj4XJ6Eu9iehnE29VW6hdQCyfiXNsSJn4xQGBx1u7iBaLurIGMGVVhoOelZa2/FQJOF+BI+UTTLi8UYg9wgI2zB2j6VWtPJyv/ACT7yKVM9ExWKVWVFViGLagSqwJGY8p5VIjiK8+t8O4s5k3As9E0Hukmj8P2Wxzx3uKuRr7Pg+lW+Hl6fP6FfeRNk+MRBLsqgbkkD61AO0NptLZNw/ueL4tt86q8D2GsghrpLt1clj85rT4PAWbQhY9KsjpZXuyLyxBFt3ru57tOYGrH3ty9KL4alicttlZsufTxAgmJzDQ6g86NF9dhSW8OUD3a/CK2wwxjyKJZGyXux0rtR975/KlVvCV2OdKjuJRbLUT25q5orAL5NQirB8P0oVrBnpUaJWD3BUb2RuaKNmTrTbqxSAoccjAkhmBHTaOhqK3xkro6+o/lV09rfSqPG8O8/gKixljh8cj+ywP9cxU81kcTwtyZWRHOYPypLi8Tb/eH72vzGtAGurhFZi32nj+0tsPd4v5UVZ7UYdtO8Cno0qfnSsZexSK0JZ4hbbVWB9xB+lTi+OtFgOKdQDTDh1/KPhUgcV3MKNgB2waH8A+dN+5J+WPWi5pUUh2B/c1/e+NOFmPxOPU0VFLLRwoLYPkP94/xNdGb+8ap8ldyUuELIwG/O1PE82NOCU8JToVjAg6k1KiCuqtSqtOhWcX3CpVmkq08U0I5JpU+RSpgWpWm5KIy0stWEQfu6Y9qijXKAAGtVE+HFWLLTClKgKp8NQz4PWTV4bdRtapUOyiuYQULcwQ6VoXsVA+GpUOzK4jhCnlVPjuy6PrFbt8LUZw1R4Qs8pxfYkgyh19QfiKBPCMZaPhvX19zlx8HmvX2wc1C+A8qKYWeVW8fxC3+2J/+S2p/7Yqcdqsdb9pbT9IDrPzNbvHcGnUCqTEcBmk7GUf/AIiXU/tMKf8Aoefkyip8P9p9k+1ZvL6Kfoatk4ErjK6A+lDP2QtDbT0H8qAH2vtHwZ3Nxffbf+VFWu3+BP7cD3hh/Cq5uyabQT8B9KevYK03Ij4H6igC3TtvgT/6m38YqZe2OB/5m1/mFU1v7NcOfazH0T+VWOF7AYJNrCsf3vF9dKdCsLtdr8ExhcRbY9FOY/AUYnHbR9nOfdbuf/Wp8NwFVEKiqOgAUfKjrXDFXeKKYWV68TY+xYuN/kUf6mFPN/FH2LNsf47pEeiI0/GrlRbAIkCR1FQreA6k/uif9qfCKwS3gsSw8V1F/wACa/FiZ+FN/wCFs5m7iL7+WYKvqqAA+tFtibp9hAPNpPyEUO2GvMfE7ehgfAaUUhjf+C8L+X/t/lSqb7i3n8a5RXoBq4rlNXEKeYpNcHUVYROsK4BTTeXqKYcUnWgCQ1wCojjF86YccOhosAgrTStD/fTyWuG+52FFgTm3TO5pgznnSNkn8RoAcbPuphtL1FN+6jmSfWl90XpSA43dj8QqJ71vr8BU/wB2XpS7hfyiihgrIjDQj10+tD3uHA8vhVl3A6CmDBiZAj3SKVCKoYKNAKkGFA9qB76tDhupJ9TXLeGUTpRQyut2E5An3A1w3ANrbH0Aq17rnTMlFCKpXuEgC2B7yTU/cOfxAf4R/OjrSCpAtAFU3Did7r+kD6Vy1wO2DPiJ8zVxkFdyUUAAnDUGwom3ZjlRAWnEaU6AYLY5V0YenK1JrtMBmSlTu/FKgKK5qbSpUugDVpUqVIkh1dWlSoAItUQ1KlQJnUrr0qVSEMropUqAFXDSpUAIVIKVKgDg3rlvnSpUAdeo6VKkwGWqclKlSAetPpUqkgEKc+1KlQBC1RPSpVEaGUqVKgZ//9k="
      },
      {
        id: 3,
        name: "Taylor Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://www.bakeandbacon.com/wp-content/uploads/2022/04/pork-roll-egg-and-cheese-10.jpg"
      },
	{
        id: 4,
        name: "Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://static01.nyt.com/images/2022/08/24/dining/as-bacon-egg-and-cheese-1/as-bacon-egg-and-cheese-1-mediumSquareAt3X-v3.jpg"
      },
	{
        id: 5,
        name: "Turkey Bacon Egg and Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://130248881.cdn6.editmysite.com/uploads/1/3/0/2/130248881/4YN4RUEDY53KOJLS3LVJXN7C.jpeg"
      }, 
{
        id: 6,
        name: "Ham Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://oakmontbakery.com/wp-content/uploads/2020/06/Ham-Egg-Cheese.jpg"
      },
	{
        id: 7,
        name: "Turkey Club",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 8.00,
        image: "https://img.taste.com.au/V9EjRwP2/w1200-h1200-cfill-q80/taste/2016/11/classic-turkey-club-sandwich-24417-1.jpeg"
      }, 
	{
        id: 8,
        name: "BLT",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 6.00,
        image: "https://dyvn6jpt1f0d3.cloudfront.net/wp-content/uploads/2023/10/14154227/BLT-for-recipe-1-6-1200x675.jpeg"
      },
	{
        id: 9,
        name: "Grilled Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 4.00,
        image: "https://www.allrecipes.com/thmb/pnEUcAXDg5GUJ77fUDzZp41NWkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-238891-Grilled-Cheese-Sandwich-beauty-4x3-362f705972e64a948b7ec547f7b2a831.jpg"
      },
	{
        id: 10,
        name: "Smoked turkey Egg & Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 7.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ1oNGzjZW8D7PRISsVsYkuXK6tAgmrbwVw&s"
      }, 
	{
        id: 11,
        name: "Bagel Cream Cheese",
        description: "(Add Hashbrown +$1) (Substitute Roll For A Bagel +$1)",
        price: 3.00,
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2F2022-11-how-to-make-cream-cheese%2FHOW-TO-MAKE-CREAM-CHEESE_083"
      }
	
    ],
	Big_Breakfast: [
      {
        id: 12,
        name: "Western Omelette Platter",
        description: "Ham, green pepper & onions (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUrLMRq27gr1zey754_rvuLrNiFxpEEaR6A&s"
      },
      {
        id: 13,
        name: "Italian Cheese Omelette Platter",
        description: "Sausage, Mozzarella cheese, paper & onion (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2_A-WpuixX2NjzGAg7tNtFmgma5zslVCNQ&s"
      },
      {
        id: 14,
        name: "Bacon Cheese Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/10/25/68/picAmS8qc.jpg"
      },
      {
        id: 15,
        name: "Veggie Patty Omelette Platter",
        description: "(Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://www.thecandidcooks.com/wp-content/uploads/2023/01/veggie-omelette-feature.jpg"
      },
      {
        id: 16,
        name: "Greasy Sandwich",
        description: "Sausage, Bacon, & Taykor Ham (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8uC3a6u6-jpSOsWAgyaicSQ3DtXZl2Qrng&s"
      },
      {
        id: 17,
        name: "Blood Clot Sandwich",
        description: "Taylor Ham, Bacon with Egg & Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://copilot.microsoft.com/th/id/BCO.8b56e79f-1a28-474e-bbdf-aa1883521b74.png"
      },
      {
        id: 18,
        name: "Italian Sandwich",
        description: "Taylor Ham, Sausage with Egg Cheese (Served with Hashbrowns or French fried or Toast)",
        price: 10.00,
        image: "https://copilot.microsoft.com/th/id/BCO.1b9d7a33-89cb-4315-bd76-2c11fa30f80b.png"
      }
    ],

    lunch: [
      {
        id: 19,
        name: "Lamb over rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "https://cookingwithcocktailrings.com/wp-content/uploads/2021/12/NYC-Halal-cart-lamb-platter-22.jpg"
      },
{
        id: 20,
        name: "Lamb over rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image: "https://cookingwithcocktailrings.com/wp-content/uploads/2021/12/NYC-Halal-cart-lamb-platter-22.jpg"
      },

      {
        id: 21,
        name: "Chicken Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 7.00,
        image: "https://www.hungrypaprikas.com/wp-content/uploads/2025/01/Halal-Cart-Chicken-2-500x500.jpg"
      },
{
        id: 22,
        name: "Chicken Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 9.00,
        image:"https://www.hungrypaprikas.com/wp-content/uploads/2025/01/Halal-Cart-Chicken-2-500x500.jpg"
      },
	{
        id: 23,
        name: "Chicken and Lamb Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJRU_4DouprSuRvD6QJiurrlvflX7FMYs5g&s"
      },{
        id: 24,
        name: "Chicken and Lamb Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJRU_4DouprSuRvD6QJiurrlvflX7FMYs5g&s"
      },{
        id: 25,
        name: "Chicken Shawarma Over Rice (Small)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Small)",
        price: 9.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTSpZhFajYZ5qNlELUALPKbm5MZocUpGvw&s"
      },{
        id: 26,
        name: "Chicken Shawarma Over Rice (Large)",
        description: "(Served with Lett/Tom/Onion & white sauce) (Large)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTSpZhFajYZ5qNlELUALPKbm5MZocUpGvw&s"
      },{
        id: 27,
        name: "Lamb & Chicken Shawarma Over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTSpZhFajYZ5qNlELUALPKbm5MZocUpGvw&s"
      },{
        id: 28,
        name: "Chicken wings & French fries Platter",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AaGQitXXp3ISk-p4XXzszeFKAZ-uxpP6lg&s"
      },{
        id: 29,
        name: "Buffalo Chicken Over Fries",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ6SOFtYF3a1Qa5WRugzyr4xDqg7FE-PezQ&s"
      },{
        id: 30,
        name: "Combo Platter",
        description: "(Served with Lett/Tom/Onion & white sauce) (Chicken tenders, Mozzarella Sticks, and French Fries",
        price:10.00,
        image: "https://copilot.microsoft.com/th/id/BCO.986721c1-3b04-40eb-b87d-c4fb0ab02d84.png"
      },{
        id: 31,
        name: "Latino Platter",
        description: "(Served with Lett/Tom/Onion & white sauce)(Baked Chicken, Moro Rice, and Sweet Platains",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpxwIZ5wKNCFr1xGit0SalLm3zsllylOzUw&s"
      },{
        id: 32,
        name: "Lamb Guacamole over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://marleyspoon.com/media/recipes/56592/main_photos/large/mexican_crispy_lamb-0c65e119c823736df12a6c98f662f3b5.jpeg"
      },{
        id: 33,
        name: "Steak over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://www.recipetineats.com/uploads/2024/09/Sizzling-Beef-Fried-Rice-54326a.jpg"
      },{
        id: 34,
        name: "Lamb and Falafel over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/f8c34379-3c8c-4c05-b956-a393131bba64-retina-large.jpg"
      },{
        id: 35,
        name: "Lamb and Steak over rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://moribyan.com/wp-content/uploads/2024/02/IMG_9983-683x1024.jpg"
      },{
        id: 36,
        name: "Chicken and Falafel over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9fOzKBvsTkLdYCqKMh4p1p4VFGWDZ1Uing&s"
      },{
        id: 37,
        name: "Egg & Steak over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TEWyzDvxNJZ0JTpI81PyblxdOLz54-G_lQ&ss"
      },{
        id: 38,
        name: "Fish over Rice",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 10.00,
        image: "https://urbanfarmandkitchen.com/wp-content/uploads/2023/12/Sayadieh-fish-and-rice-7.jpg"
      },{
        id: 39,
        name: "Salchipapa",
        description: "(Served with Lett/Tom/Onion & white sauce)",
        price: 9.00,
        image: "https://www.seriouseats.com/thmb/mrIC6LF4KWf5dltOBEVBQoMqR04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220131-salchipapas-vicky-wasik-15-f01dcb79a9f84bcd909845a1a101a962.jpg"
      }

    ],
    Gyros: [
     {
        id: 40,
        name: "Lamb Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "https://images.getrecipekit.com/20231222221833-lamb-gyros-with-tzatziki-sauce.jpg?aspect_ratio=1:1&quality=90&"
      },
{
        id: 41,
        name: "Chicken Shawarma Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://www.closetcooking.com/wp-content/uploads/2021/09/Roast-Chicken-Gyros-1200-4640.jpg"
      },{
        id: 42,
        name: "Beef Steak Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://tastesbetterfromscratch.com/wp-content/uploads/2023/01/Beef-Gyro-1.jpg"
      },{
        id: 43,
        name: "Greek Gyro",
        description: "Served with lettuce & tomatoes (Tomatoes, Onions, and French Fries)",
        price: 7.00,
        image: "https://kaynutrition.com/wp-content/uploads/2024/06/greek-chicken-gyros-1.jpg"
      },{
        id: 44,
        name: "Chicken Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2023/07/Chicken-Gyros-0666.jpg"
      },{
        id: 45,
        name: "NY style Chicken Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/n_hNNy3hzyRFkdSjhKLq2g/348s.jpg"
      },{
        id: 46,
        name: "Falafel Gyro",
        description: "Served with lettuce & tomatoes",
        price: 6.00,
        image: "https://dishingouthealth.com/wp-content/uploads/2022/02/FalafelGyros_Square.jpg"
      },{
        id: 47,
        name: "Fish Gyro",
        description: "Served with lettuce & tomatoes",
        price: 7.00,
        image: "https://www.gortons.com/wp-content/uploads/2023/09/Website-Maintenance_MarchSprint_750x750_Crispy-Fish-Gyro.webp"
      },
    ],
    Fat_Sandwiches_Steaks: [
      {
        id: 48,
        name: "Ivan",
        description: "Steak & Fired Chicken & Mozzarella Sticks, & Chedder Cheese & French Fries with lettuce, tomatoes, & white and hot sauce",
        price: 11.00,
        image: "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6InVzZXItcDkxNDRuVlkybFd3QVVuYlcyWE9xeWN1OmZpbGVfMDAwMDAwMDA0NjBjNzFmN2IyN2M3NmI1ZDkyMjJiZDkiLCJ0cyI6IjIwNDM1IiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiJmZDJiY2VkNzQwZTg1OWFlOGM0YWUzNzdiYTBlODE1NzZmZmJjMTU1YzU4NTQxZDQ3YTAxODY3YjRiNTBhNmVlIiwidiI6IjAiLCJnaXptb19pZCI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ=="
      },{
        id: 49,
        name: "Italian Philly Steak",
        description: "Steak & cheese & French fries & fresh peppers & onions with Mayo and Ketchup",
        price: 10.00,
        image: "data:image/jpeg;base64,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"
      },{
        id: 50,
        name: "Pizza Steak",
        description: "Steak & Mozzerella Sticks & Mozzarella cheese & French fries with Marinara sauce",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVAuOzMp85-JcqqHJxd_xeRBzOPc-vM_6ZQ&s"
      },{
        id: 51,
        name: "R US",
        description: "Steak & Bacon & Jack Cheese & French fries with Ketchup",
        price: 11.00,
        image: "https://dinnerthendessert.com/wp-content/uploads/2025/02/Philly-Cheesesteak-11-edited.jpg"
      },{
        id: 52,
        name: "Summer",
        description: "Steak & chicken tenders & Chedder cheese & Mozzarella Sticks & French Fries with Mayo and Ketchup ",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJFRr1G-8vPW7ILKp3OE6KYPxBgkGqaAkXQ&s"
      },{
        id: 53,
        name: "Greece",
        description: "Sausage & Mozzarella cheese & French pepper &and onion with Lett/Tom & white sauce",
        price: 11.00,
        image: "https://meganvskitchen.com/wp-content/uploads/2022/04/IMG_1171-scaled.jpg"
      },{
        id: 54,
        name: "Hot",
        description: "Hot Dogs & Chedder fries & Beef Chili with onions and Mayo & Ketchup",
        price: 11.00,
        image: "data:image/jpeg;base64,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"
      },{
        id: 55,
        name: "MOJO",
        description: "Burger & cheese fries & Mozzarella sticks with BBQ sauce or Ketchup",
        price: 11.00,
        image: "data:image/jpeg;base64,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"
      },{
        id: 56,
        name: "Double",
        description: "2 cheese burgers with lettuce, tomatoes & onions served with mayo and Ketchup",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPcR58JIITnTZ9XJdIP4rNaS3zKr_JCKz7Q&s"
      },{
        id: 57,
        name: "Mad Cow",
        description: "Burger & Bacon & Jack cheese & french fries served with BBQ sauce or ranch",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Tl0E7OvdLglZ268gIhlfJx5eN2LopEYQdA&s"
      },{
        id: 58,
        name: "Italian Fish Sandwich",
        description: "",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOUCpTN7rbca8UtoZft8jVI7j6ECwkg3TWg&s"
      },


    ],
    Fat_Sandwiches_Chicken: [
     {
        id: 59,
        name: "A LA Carte",
        description: "Chicken & Lam served with Lettuce, Tomatoes & white sauce",
        price: 11.00,
        image: "https://suebeehomemaker.com/wp-content/uploads/2025/05/best-chicken-sandwich-recipe-4.jpg"
      },{
        id: 60,
        name: "Chick",
        description: "Chicken Tender & Bacon & Jack cheese with French fries & Ranch sauce",
        price: 11.00,
        image: "data:image/jpeg;base64,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"
      },{
        id: 61,
        name: "Fried",
        description: "Chicken Tender & Mozzarella Sticks & French Fries & Chedder cheese with Honey Mustard",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINlMVoifLCRd1KwRKFK6oZa4IomG4EqokGw&s"
      },{
        id: 62,
        name: "French",
        description: "Grilled Chicken & chicken tender & Mozzarella Sticks with White Sauce",
        price: 11.00,
        image: "https://tastefullygrace.com/wp-content/uploads/2024/08/Grilled-Chicken-Sandwich-Recipe-1-480x270.jpg"
      },{
        id: 63,
        name: "King",
        description: "Grilled Chicken & Beef Steak ^ Mozzarella cheese & french fries serves with Mayo & Ketchup",
        price: 11.00,
        image: "data:image/jpeg;base64,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"
      },{
        id: 64,
        name: "Meats",
        description: "Chicken Tender & Lamb with Lett/Tom & white & Hot sauce",
        price: 11.00,
        image: "https://jamjarkitchen.com/wp-content/uploads/2021/06/DSC_0075-1.jpg"
      },{
        id: 65,
        name: "Cordon Bleu",
        description: "Chicken Tender & Ham & Swiss Cheese with Lett/Tom and Mayo Sauce",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmTiDDnyo7cOVJad13OQloZNtexffQyZOrg&s"
      },{
        id: 66,
        name: "Parmesan",
        description: "Chicken Tender & Mozzarella Sticks & Mozzarella cheese with Marinara Sauce",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpesp8tp5Klts6jru5-mw5R7_P1fedG7nDLQ&s"
      },{
        id: 67,
        name: "Tunes",
        description: "Chicken Tender & Potato Egg & Bacon with Lett/Tom & Mayo and Ketchup",
        price: 11.00,
        image: "https://parade.com/.image/w_1200,h_630,g_auto,c_fill/MTkwNTgxMDU3MzUzMDMyODI5/blt3.jpg"
      },

    ],
    Burgers: [
    {
        id: 68,
        name: "Delux Burger",
        description: "Lettuce, Tomatoes & Onions with French Fries; Cheese (Chesseburger or Veggie Burger or Falafel Burger or Chicken Burger)",
        price: 10.00,
        image: "https://d1w7312wesee68.cloudfront.net/moYYxYOP7Xo4GJJoGRzae0tocrYqGa5X2Rsi5sSM1ww/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/7f715768-6835-4217-99e8-a4ccc267ba4f/MenuItem/596213b7-fc2e-4b10-b162-b39693bf1361.jpg"
      },
  {
        id: 69,
        name: "New England",
        description: "Cheeseburger, Bacon & Egg",
        price: 11.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRi-Nsj8S1Ie33i5KAfHp1VKKXQp89JuVbQ&s"
      },{
        id: 70,
        name: "Green Gang",
        description: "Burger, Taylor Ham, Jack cheese & Guacamole Sauce",
        price: 11.00,
        image: "https://images.getrecipekit.com/20240729195336-alvin-20cailan-20guac-20burger.jpg?aspect_ratio=4:3&quality=90&"
      },{
        id: 71,
        name: "San Fran",
        description: "Burger, Bacon, Egg & Swiss Cheese",
        price: 11.00,
        image: "https://whatshouldimakefor.com/wp-content/uploads/2019/07/IMG_8418.jpg"
      },{
        id: 72,
        name: "Tunes",
        description: "Burger, Steask, Egg & Yellow American cheese",
        price: 11.00,
        image: "https://www.sweetteaandthyme.com/wp-content/uploads/2024/03/steak-and-egg-sandwich-hero.jpg"
      },

   ],
   Wraps: [
{
        id: 73,
        name: "Chicken Caesar",
        description: "Served with Lett & Tom",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3egaLsvGH_cnjiu3kkPUPbMC5tR3oZ5khBA&s"
      },{
        id: 74,
        name: "Buffalo Chicken",
        description: "With Ranch or Blue Cheese Sauce",
        price: 9.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPnPU5uagEWB-my_Uqkt1F225jVgS-9GrIw&s"
      },{
        id: 75,
        name: "Chicken Honey Wrap",
        description: "Served with Lett/Tom",
        price: 9.00,
        image: "https://borrowedbites.com/wp-content/uploads/2024/05/Tortilla-Wrap-With-Sweet-Spicy-Chicken.jpg"
      },{
        id: 76,
        name: "Grilled Chicken Wrap",
        description: "Served with Lett/Tom with Mayo Sauce",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTIilIBIt2OXjZ09VOvG94HflCXLIFvFOfg&s"
      },{
        id: 77,
        name: "Chicken Parmesan",
        description: "Served with Lett/Tom",
        price: 12.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjZKOKUoOW1YHDymoqN4ZMetcfsCalFHoRw&s"
      },

  ],
    Biryani_Menu: [
      {
        id: 78,
        name: "Egg Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "https://ministryofcurry.com/wp-content/uploads/2019/11/egg-biryani-3-1.jpg"
      },{
        id: 79,
        name: "Falafel Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwAXgCHtWRNlt-vOWycXNPnLkdg9IqBVQpg&s"
      },{
        id: 80,
        name: "Veggie Patty Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2019/01/Shahi-Veg-Biryani-recipe-1-1.jpg.webp"
      },{
        id: 81,
        name: "Chicken Biryani",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce (TIKKA or TANDOORI OR CURRY +$1",
        price: 10.00,
        image: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg"
      },{
        id: 82,
        name: "Veggie Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "data:image/jpeg;base64,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"
      },{
        id: 83,
        name: "Samosas Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 9.00,
        image: "https://static-content.owner.com/funnel/images/59d3d8a1-d719-4d32-8ac4-1419d45214fb?v=8145296445&w=3840&q=80&auto=format"
      },{
        id: 84,
        name: "Lamb Biryani Platter",
        description: "Served with Lettuce, Tomatoes & Onion with white & Hot sauce",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzK9aP0qCgYCcvT3dyc45qoxr3Am0k3S7Cg&s"
      },
  ],
    Veggie_Menu: [
       {
        id: 85,
        name: "Veggie Samosas",
        description: "(Roll...$3 or Burger...$5 or Over Rice...$7)",
        price: 10.00,
        image: "https://pataksusa.com/wp-content/uploads/2023/09/homemade-vegetable-samosas.jpg"
      },{
        id: 86,
        name: "Egyptian Sandwich",
        description: "Falafel, French Fries served with letteuce, tomatoes, onions & white sauce",
        price: 10.00,
        image: "https://www.themediterraneandish.com/wp-content/uploads/2020/11/hawawshi-recipe-7.jpg"
      },{
        id: 87,
        name: "Indian Sandwich",
        description: "Veggie burger, Onions, Peppers, Lettuce, Tomatoes with Mozz. Sticks & white sauce",
        price: 10.00,
        image: "https://www.honeywhatscooking.com/wp-content/uploads/2022/06/Bombay-Grilled-Sandwich29.jpg"
      },{
        id: 88,
        name: "Samosa Tikka Sandwich ",
        description: "",
        price: 10.00,
        image: "https://www.madhuseverydayindian.com/wp-content/uploads/2021/06/samosa-grilled-cheese-768x1024.jpg"
      },{
        id: 89,
        name: "Veggie Falafel Sandwich",
        description: "",
        price: 9.00,
        image: "https://www.heynutritionlady.com/wp-content/uploads/2023/07/Falafel-Sandwich-Recipe-SQ.jpg"
      },      

    ],
    Quesadillas: [
    {
        id: 90,
        name: "Chicken",
        description: "Served with lettuce, tomatoes & cheese",
        price: 10.00,
        image: "https://cheeseknees.com/wp-content/uploads/2022/06/Smothered-Chicken-Quesadillas-sq-500x500.jpg"
      },{
        id: 91,
        name: "Steak",
        description: "Served with lettuce, tomatoes, & cheese",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GL6CMdToAGDlb7bqxQhHUIKB7Vncxys_Iw&s"
      },{
        id: 92,
        name: "Mix Cheese",
        description: "Served with leetuce, tomatoes, & cheese",
        price: 10.00,
        image: "https://www.sweetashoney.co/wp-content/uploads/Cheese-Quesadilla-6.jpg"
      },

    ],
    Sides: [
       {
        id: 93,
        name: "Chesse Fries",
        description: "",
        price: 5.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95PlvlAM-G-CgXSkSNvdhV1q4I0VHHBD7lA&s"
      },{
        id: 94,
        name: "Chicken nuggets",
        description: "",
        price: 5.00,
        image: "https://www.momontimeout.com/wp-content/uploads/2021/02/chicken-nuggets-square.jpg"
      },{
        id: 95,
        name: "Cajun fries",
        description: "",
        price: 5.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpI1iNRsippreOw-dRWYV08_t5cIKe305yBA&s"
      },{
        id: 96,
        name: "Chicken wings",
        description: "",
        price: 6.00,
        image: "https://www.sixsistersstuff.com/wp-content/uploads/2025/01/Crispy-Baked-Chicken-Wings.jpg"
      },{
        id: 97,
        name: "Mozzarella Sticks",
        description: "",
        price: 5.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ohj7kpLNWkVhKNgu5fV50VclmEp7TtNVjQ&s"
      },{
        id: 98,
        name: "Sweet Plantains",
        description: "",
        price: 4.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadM8CPRJZx589nXOtHDdSiJHcQV24UPj-YQ&s"
      },{
        id: 99,
        name: "Empanadas",
        description: "Cheese or chicken or Beef or Ham & Cheese",
        price: 2.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qqy8SJ5QtuSDhPR3SiV-zR0A8iVSgIMy3g&s"
      },

    ],
    Burritos: [
     {
        id: 100,
        name: "Grill Chicken",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce)",
        price: 10.00,
        image: "https://onestophalal.com/cdn/shop/articles/grilled_chicken_burrito-1700352067531_1200x.jpg?v=1700352222"
      },{
        id: 101,
        name: "Beef Steak",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce)",
        price: 10.00,
        image: "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/17708/beefsteakburritos.jpg"
      },{
        id: 102,
        name: "Lamb",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce)",
        price: 10.00,
        image: "https://adventuresincooking.com/wp-content/uploads/2013/05/IMG_0316-4.jpg"
      },{
        id: 103,
        name: "Max",
        description: "Rice, Beans & Cheese (Served with white sauce & guacamole sauce) (Two type of meat)",
        price: 11.00,
        image: "https://thecookingfoodie.com/wp-content/uploads/2025/11/ground-beef-burrito.jpg"
      },
   ],
    Salads: [
      {
        id: 104,
        name: "Chicken Caesar",
        description: "",
        price: 10.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSRxye2TDzRDi_QOgeILnJMO6U3cEWJw6Fw&s"
      },
      {
        id: 105,
        name: "Fish Salad",
        description: "",
        price: 10.00,
        image: "https://static01.nyt.com/images/2025/08/26/multimedia/31EATrex-crispy-fish-salad-blvf/31EATrex-crispy-fish-salad-blvf-mediumSquareAt3X.jpg"
      },
      {
        id: 106,
        name: "Italian Salad",
        description: "Grilled Chicken, crisp bread, fresh vegetables, Fata cheese, Olive oil & italian dressing",
        price: 10.00,
        image: "https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-ca18e1d/www.slenderkitchen.com/sites/default/files/styles/featured_1500/public/recipe_images/grilled-chicken-Greek-salad.jpg"
      }
    ], 
    Drinks: [
	{
        id: 107,
        name: "Canned Soda",
        description: "Coca Cola, Pepsi, Sprite, Sunkist, Canada Dry, Inca Kola, Pepsi Zero",
        price: 1.00,
        image: "https://128786352.cdn6.editmysite.com/uploads/1/2/8/7/128786352/MO4JIAQJPD5WPHFIIKRQL5H2.jpeg"
      },{
        id: 108,
        name: "Energy Drinks",
        description: "Monster & Redbull",
        price: 2.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgyJR7neckezBI0k22WVg48xTBXfPj65saA&s"
      },{
        id: 109,
        name: "Cranberry",
        description: "Bottled",
        price: 2.49,
        image: "https://m.media-amazon.com/images/I/71PpMhJmtCL._AC_UF350,350_QL80_.jpg"
      },{
        id: 110,
        name: "Orange Juice",
        description: "Bottled",
        price: 1.49,
        image: "https://target.scene7.com/is/image/Target/GUEST_ecffb70d-fdb4-4b4d-9c7e-e4d1cb7e0196"
      },{
        id: 111,
        name: "Apple Juice",
        description: "Bottled",
        price: 1.49,
        image: "https://target.scene7.com/is/image/Target/GUEST_7cb1a77f-80cb-4ba3-8bbd-d82ea970e34d"
      },{
        id: 112,
        name: "Coffee",
        description: "",
        price: 1.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9TfIFqT5Np6d9CSiJB0QdXnOGE2NPaOXGQ&s"
      },{
        id: 113,
        name: "Water",
        description: "Bottled",
        price: 1.00,
        image: "https://www.coca-cola.com/content/dam/onexp/us/en/brands/dasani/desktop/dasani-water-quality-report-highlight.png"
      },{
        id: 114,
        name: "Snapple",
        description: "Bottled",
        price: 2.00,
        image: "https://images.albertsons-media.com/is/image/ABS/108100081-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available"
      },{
        id: 115,
        name: "Gatorade",
        description: "",
        price: 2.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjtKXpVgD2JGeO-cN17b8vh-zE-0CFBxnyQ&s"
      },









    ]
  

};


  return (
    <div className="menu-container">
      <h1>Highlander Bites Food Truck Menu</h1>

      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="menu-section">
          <h2 className="menu-category">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>

          <div className="menu-grid">
            {items.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-img" />
                <h3>{item.name}</h3>
                <p className="menu-desc">{item.description}</p>
                <p className="menu-price">${item.price.toFixed(2)}</p>

                <button
                  className="add-btn"
                  onClick={() => add(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}




