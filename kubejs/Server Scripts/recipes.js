
ServerEvents.recipes(talaria => {
    talaria.remove({
        output: 'explorerscompass:explorerscompass'
    })
    talaria.shaped(
        '1x explorerscompass:explorerscompass',
        [
          'aba',
          'bcb',
          'aba'
        ],
        {
            a: 'silentgear:tyrian_steel_ingot',
            b: 'apothic_enchanting:infused_breath',
            c: 'naturescompass:naturescompass'
        }
    )
})
