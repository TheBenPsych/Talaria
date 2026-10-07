
ServerEvents.recipes(talaria => {
    talaria.remove({
        output: 'naturescompass:naturescompass'
    })
    talaria.shaped(
        '1x naturescompass:naturescompass',
        [
            'aba',
            'bcb',
            'aba'
        ],
        {
            a: 'minecraft:netherite_ingot',
            b: 'minecraft:nether_star',
            c: 'minecraft:recovery_compass'
        }
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
