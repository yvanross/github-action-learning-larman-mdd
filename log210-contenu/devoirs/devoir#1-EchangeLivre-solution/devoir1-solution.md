![mdd](https://www.plantuml.com/plantuml/svg/0/ZLD1Yjim5Dth51ylYnrYPZfbJ0apSGejb38mT9UDnlfEH6N9I78Wb3b0Rz5ToHcwwC87wXNcoxQIIOU1ReJr_Vvx_pr9Dyvpwxj60LVA0Flx-u_x9dNBBM_0-Rr2Mgsi0eHjfK30flLxQB1vGElEItvhX6EiKjmvA9L4xU5zEN-x-Cv0c-Qhbqewxh6pKC0zqUhDyEFPhZATjH8LbMw5HUUmd2hi4IBrPxcp69Wl5a3KD8BsifQSv0eeZS014CYqa5uQFPNBk6UF4zCANMLb6sf7qkk1b9e5VhfVVdas78WJ_5IENCcoiyYxjLxrXnqgqxROq62qxon_K9W0S0VBrIg8NARb_6h1ff2IF84iW-HDCdehO8UTp_f3jULwWtQjR_CS5Ymq3zW1EZKNK5D4MlfihHtQdQmmwtzIo_oQMaPR0Hu4gFU5vGBG-KoGc2KEEldG-evQewyxQrhZXk3w7-D4IR1ozo4uoSUu19thHphPmBUAtvGDWQAxV3QB1WbawjfYaBeWgLTH5ljVHlg8Em-0kcXuRN4ZwP8EP5SngiWuhCUaWjDsiDCVC7gz_4_u66f0AzoW5g2mzknutzBpEvQUOaZ_lSifeAzcu0ofA7JWzosjz9A4qPgat8oD_466tT12p-y9 "allo")

![CU01 - Ajouter un livre à échanger](https://www.plantuml.com/plantuml/svg/0/NP0zJWGn38NxdCBQYfKO2TeKguMfa13DYWE4n093VaQs1sblGycUWO9Y3iGLI390GHF9xyNVUybUrB7EAPglZqzveJmvTWb4Zn7hoUIxgQHr7kylBc60g-SoApBC6IAzCiBo1il9FxdyY6oSryAmiMCapBe19-1DfIfvcbpMQXsEeijxmcwAySDEm49OJian8tV-RIEVROs9fKp0A8eGKDR4lnstLbalappageqbuCtX-kuSVCc1b4gsJHj_fwsHOTZv5edYcQOc6im1MfRfR0iLcoZ_QzCNRIsnrlbf0s46tvzhzXLJF-mR "CU01 - Ajouter un livre à échanger")

CU01-Contrat-demarrerAjoutLivre
Opération : demarrerAjoutLivre()
Préconditions :
    - Une instance c de Client existe
Postconditions: 
    - Aucune
![demarrerAjoutLivre](https://www.plantuml.com/plantuml/svg/0/PP0zJWD138NxFOML2Weki0LAig5BHvjcTiS9XlbPRCyARaFBEN8nFAELGA4PMRRVUzzuA-fOImpWCJfcvDrhBdgaXR6JDqgpOnVXMJy3WYZJL9SxwofDDBkaiEc7d9HpmF97l04dC2dVx8xUz_l3eKsjXgvBMH42dXNokGbw-FKpAX0KePowXyTr_9_qxlx6fyR0qyUChASqc0eSb8ImaD18WVJw3MBsU-zFoHwu8BSa609XKe68SMGqyOjxBxYsuVhLR0A9XVbQr3jLB32ybdf1NJrs2qv7-qH356FSOl9slHy0 "demarrerAjoutLivre")

CU01-Contrat-ajouterLivre
Opération : ajouterLivre(isbn : CodeISBN, condition : CodeCondition)
Préconditions :
    - Une instance c de Client existe
    - Une instance bdd de BureauDeveloppementDurable existe

Postconditions:
    - Une instance l de Livre a été créée
    - l.identifiant a été initialisé à une valeur unique
    - l.condition est devenu égale au paramètre condition
    - Une association entre l :Livre et DescriptionLivre aété créée sur la vase de correspondance avec le paramètre isbn.
    - Une association entre l :Livre et bdd a été créée
    - Une association entre l :Livre et c :client a été créée
 

![ajouterLivre](https://www.plantuml.com/plantuml/svg/0/bPHDRi8m48NtESMeAq1mWGWYMigkYqfLTzaOso2tZXtPGzNUg3q75-lOpWyOLAaRb7ZcVVFyCcBjaJayDXhOcpsYT4_gmyd2lolJCiSQUC4lBS6ZKpoq5NIAYgkM6OIxScCDEglbqTq7UHJV0VF0qUMz3MkNok_C_55wxbIBofeegAAY4Hek5LoN6wsamKJCU3f8ot7YLTadEmb1ZHwNvTayhNbcy468MDa9aJdHccgt4DHQ5CQY12tt27OVBrx2c0i8IazwJvSj5bLNFizw4Z8fGy3cC0TkZL0XcUvack4ffHAsdwrqM9i0MrIKQ_yOKBMX0w1HuGMAK0XlKIYov6451udHGJw8Nysv4aiSxTOcvGpIqwax_J3iBfyMghSHiF7BhRYJVG8vUJvWSrSXMYSZU_BykjbEXxcjzVxqBK9h6a2siygV5oXuzATXDkiSKZWyplgFFyt7s9ApHTNP6LylDhCV79HCY4diphcqPsVS-3be8sj3Fr4SDZCjvf1qb10mHNoJ6lTtv18ikUjHkuwkUzQ0MKiZwD_W5m00 "ajouterLivre")

CU01-Contrat-terminerAjoutLivre
Opération : terminerAjoutLivre()
Préconditions : 
 - Une instance c de Client existe
Postconditions: 
    - Aucune

![terminerAjoutLivre](https://www.plantuml.com/plantuml/svg/0/PP0nRiDG28RtTmgKAHbo0IknKbdTkcNDykhWbXRpBC1HUwIS8nShjYErIYSa-FW_nC4yguyzWwFs9AXF7sNq5xee9lia6RBc7ex-pGZcIkq4f-WwjJHaSLXLJH7NmZZ-MLv1DcXT7zYsQfXGV1bpIb8SWR5pADtCL_0R1-UGeXaLITlwFlv_w7hp41FKyzU0wYTfOWSoNCZebPZyTWMBuEKAoAE_HwMERjTWv-QsPZBVpSbrcfmmkIEJ6VRmXelKmdf0ESSxVW00 "terminerAjoutLivre")
![CU02 - Proposer un échange de livres](https://www.plantuml.com/plantuml/svg/0/ZL9BJWCn3Dtd55Otj8kH4CjPL9MwHQAYuW0XaxOMasJaU2hr2Do29Jq32nPp8Aw0a_bG419i9edz_DwpFQl8chXrjVfuUuzFw1jDsa7aKstbIsXoaf7blNwule42DXIQ42r1ww4xcuFsUmkLXHgFPAFIXWF1h5pNQ3tFG4SmIcWP3JRQiwIsfyZTgxCv6PKonJ92AHnE4rdg1P0n-EwvvvylL2oAfH5Kpnl1yg08tSlaWp8Pn1BC8M14wj5phFgBr6-bAx__uginyeL_gDf1Og18GX8pEQPK7K83WiiryS92Cun50OI6HuwZRLdWnXu3vedb0i40fAxBgUmsnUy7eFZDxzHkg6o-BwJ8-YgH_o8HTZlwXy1TXlr5dyxKPx-P4jYIG_zjCUD2Il31FT8qFJqwaQdfgV6Ho0I_GtAMVkwrJ2DjNNVEYxWQrwbMOaL-m4y0 "CU02 - Proposer un échange de livres")
Contrats d'opération : CU02

Opération : demarrerPropositionÉchange()
Préconditions : 
    •	Une instance c de Client existe
    •	Une instance bdd de BureauDeveloppementDurable existe
Postconditions: 
    •	Une instance p de PropositionEchange a été créée
    •	Une association a été créée entre l’instance p :PropositionEchange et c :Client
    •	Une association a été créée entre l’instance bdd :BureauDeveloppement et p :PropositionEchange
![4-rdcu-1-demarrerPropositionÉchange](https://www.plantuml.com/plantuml/svg/0/RP313S8m34NlcSBYH95O8188KN57OeAGk12H9f7Z7XY1kLWCjqMY5Avvp__RsHKsn5qRLBdvc0sP5avy3mY5oTk1o2jxwxE930jTfyYK0dPqf9HJyUnJV3xirSGBBi0Ki4op8Hjq7Jn67laySk_S0CxEVPECUb9oc7HaL2ecHWZOCAHcADNmMGwSd82bo9nQRz_OOMk8a7v3bvNg5H1Ljj2I3nkmX7zT6oebLY-BjrhftZGy0hN3wEJRNW00 "4-rdcu-1-demarrerPropositionÉchange")

Opération : choisirClient(idClient : string)
Préconditions : 
    •	Une instance c de Client existe
    •	Une instance p de PropositionEchange existe
Postconditions: 
    •	Une assocation entre p :PropositionEchange et client a été créée sur la base de correspondance avec le parametre idClient


![4-rdcu-2-choisierClient](https://www.plantuml.com/plantuml/svg/0/VP51JWCn34NtEONL5KZC1KOmggXO8Y6nxIOaRckHSIB7W-08d8kBuSaCAdJ19hByxVTjPrlLYqvZSlMLk7Zn8pphHqAeAXIQObcbGCMpmgRVPLR92ITvabno9QNCNv_XvFc86_0LWifbqtsCJNg9yK9vzEMMytZJxn8Xwz3Anf30ESwAaF2Wa0yDsiFP7AADYBMQkUk6LGwdJ9LaGLrHN8BhloIReOU7zuAYUvxxki5IUxR7v8FCN7cZWE2XfAcIkLLOK6wk1_Dh48GxEAB-RsUxdEti3jtmKzWiks6q2wpBkta6exUUbVwBwxR8qNxa6m00 "4-rdcu-2-choisierClient")

Opération : proposerLivreRecevoir(idLivre :CodeLivre)
 Préconditions : 
    •	Une instance c de Client existe
    •	Une instance p de PropositionEchange existe
Postconditions: 
    •	Une association "Recoit" a été créée entre p :PropositionEchange et Livre sur la base de correspondance avec le paramètre idLivre
![proposerLivreRecevoir](https://www.plantuml.com/plantuml/svg/0/RL8nSW8n3Epz2WqL5Fd03M5863eooIGjZJaBuiJO7bl794_8BzBo3ZuMoJdW3cWbxMftfMacdQZPEeWfn90nBUmkuIlMk0isgVnfVTH9R-6DlXr2fcHhcLTS9LlRg3t1e9e5JoauRD9BuR5aWp_yrE_QRt00EaDDwHBqQ4nfhOpfTo9M7PfvXoLYVtBhgYSTnqNqf4om5UZFE9kfvwfQS6LSTK3E9QLy80I7QuAmBd8hEDi2m-OnPzQZxYPj-sPcmpeOB9LAqlARKP-PtLOm_ugOQEc51mw_q7Y4dSrsPPsbmnuoR-HuLEdplW9oS0yR_FTotZA2FZz7Sg9dc42X3jvhcu52Gpp8XWMPbVIONI0jUOUtJyitET7EH1LceO8w7VQQseHk7cxfBtu2fIgQo28VIBpBZL0OYZ19v7czJlo0RG2oNN-m-ZRiX-kqB_JoIS-2hqMTrvjZ7B8r7Hy_eWHJIBGnGpTIQehUyEV_0G00 "proposerLivreRecevoir")

Opération : proposerLivreOffrir(idLivre :CodeLivre)
 Préconditions : 
    •	Une instance c de Client existe
    •	Une instance p de PropositionEchange existe
Postconditions: 
    •	Une association "Offre" a été créée entre p :PropositionEchange et Livre sur la base de correspondance avec le paramètre idLivre

![proposerLivreOffrir](https://www.plantuml.com/plantuml/svg/0/RP91RW8n34NtEON52XQzm8WYMiIEgfMwPHCc7fes957YGUqHUejkEGSNgnscC4DPpjX-_lyxyqmwKRjp45E88MDQsNt2vwP9DgdyONtKIU_WbRuSGgPaQ-bM_9TiRQFs1ADg4JobuB1DBuLYoGP__AxVjD_Y27I6cjBrqACnfRGnPbY9MFKmonubuh1pvwed7QT5ygnqi14OzZYRgUUfMl7tjEgDE9UKye4G73O4eIbYAxYO0iFMCMTMe-vcNVb6NkCw62pVbIJbjvCXbvrMiFoCc6ZjXGB77sWzmjvckx7Eql40cVTnDAhKULiPSd0FMppvk6oPm93FSPpnF2QZK0VljSr0eILkPBiocPNKc2uZ7Rp77MBv7cViGbHX5XJKwNZGrELpysXhV_KUKFwA9hB8nn7lSXyKGX4cYNIFhmj0jkjtLjz5_N2TzPLQFkT5xdz9b-NcBmpP6Kux8qee1Q6D6Rk9KdFqXb_yBm00 "proposerLivreOffrir")

Opération : terminerProposition()
Préconditions : 
    •	Une instance c de Client existe
    •	Une instance p de PropositionEchange existe
Postconditions: 
    •	aucune
![terminerProposition](https://www.plantuml.com/plantuml/svg/0/TL3D2eCm3BxtAS9EUl05F8WWtWUxxb9grB2QbZJ2zlQhSsmos2q_tr_I9hMYw-91KHPYbBE4618f1JRfHXojs0Kk-l08IONSXZPvgkGeMbOurLrWbU1nFR9xDrkUy0GsWLFvuKIi_s0Z6iD14JoE2c5yaMluUi2Gas1AMyAgUQ_T72YHT9wGjQ1XByfTIMYQ3rBzFQBebRUkQhBVLa2Mog4-VoXAOrha8L_x1000 "terminerProposition")


Opération : confirmerEchange()
Préconditions : 
    •	Une instance c de Client existe
    •	Une instance p de PropositionEchange existe
Postconditions: 
    •	p.dateHeure est devenu maintenant
![4-rdcu-5-confirmerEchange](https://www.plantuml.com/plantuml/svg/0/NOun3i8m34NtdCBg10CNw80g8NOaJX2bBbYaTcIxGu_0kRWO8Qe4OlL_x_iFvb5zcNEm1t696cUu-feHp9LII-hLAL69xD3r9s5NoRZeHQM8aPFmwvdkaM_OGJH8hdzIwHkh7_JyGnQ4mE886IS7cPhQm_S5Z7K8cbKl78vRxAWpCUhMjDk7C22FTUeR "4-rdcu-5-confirmerEchange")
